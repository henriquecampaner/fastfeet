import * as Yup from 'yup';
import { Op } from 'sequelize';
import Orders from '../Models/Orders';
import DeliveryProblem from '../Models/DeliveryProblem';
import Deliveryman from '../Models/Deliveryman';
import Queue from '../../lib/Queue';
import CancelOrder from '../jobs/CancelOrder';

class DeliveryProblemController {
  async index(req, res) {
    const { q: description, page = 1 } = req.query;

    if (description) {
      const problems = await DeliveryProblem.findAll({
        where: {
          description: {
            [Op.iLike]: `%${description}%`,
          },
        },
        limit: 5,
        offset: (page - 1) * 5,
        order: [['id', 'DESC']],
      });
      res.json(problems);
    }
    const problems = await DeliveryProblem.findAll({
      limit: 5,
      offset: (page - 1) * 5,
      order: [['id', 'DESC']],
    });
    res.json(problems);
  }

  async show(req, res) {
    const { orderId } = req.params;
    const order = await Orders.findByPk(orderId);

    const problems = await DeliveryProblem.findAll({
      where: { order_id: orderId },
    });

    if (!order) {
      res.status(400).json({ error: 'Order doest not exists' });
    }

    return res.json(problems);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      order_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { description, order_id } = req.body;

    const order = await Orders.findByPk(order_id);
    if (!order) {
      return res.status(400).json({ error: 'Order doest not exists' });
    }

    const deliveryman = await Deliveryman.findByPk(order.deliveryman_id);

    await DeliveryProblem.create({ description, order_id });

    return res.json({ description, order, deliveryman });
  }

  async destroy(req, res) {
    const { orderId } = req.params;
    const order = await Orders.findByPk(orderId);
    if (!order) {
      res.status(400).json({ error: 'Order doest not exists' });
    }

    const problem = await DeliveryProblem.findAll({
      where: { order_id: orderId },
    });
    if (!problem) {
      res.status(400).json({ error: 'Problem doest not exists' });
    }

    const deliveryman = await Deliveryman.findByPk(order.deliveryman_id);

    order.update({ canceled_at: new Date() });

    await Queue.add(CancelOrder.key, {
      order,
      deliveryman,
    });

    res.json('Order canceled');
  }
}

export default new DeliveryProblemController();
