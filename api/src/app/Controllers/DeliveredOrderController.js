import { Op } from 'sequelize';
import Recipient from '../Models/Recipient';
import Orders from '../Models/Orders';
import Deliveryman from '../Models/Deliveryman';
import Files from '../Models/Files';

class DeliveredOrderController {
  async index(req, res) {
    /** query to search for undelivered and undelivered orders */
    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id);
    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman doest not exists.' });
    }

    const orders = await Orders.findAll({
      where: {
        deliveryman_id: id,
        canceled_at: null,
        end_date: {
          [Op.not]: null,
        },
      },
      order: [['id', 'DESC']],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name', 'street', 'number', 'country', 'city'],
        },
        {
          model: Files,
          as: 'signature',
          attributes: ['url', 'path'],
        },
      ],
    });
    return res.json(orders);
  }

  async update(req, res) {
    const { orderId, signature_id } = req.body;
    const order = await Orders.findByPk(orderId);

    if (!orderId || !signature_id) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const end_date = new Date();

    order.update({ end_date, signature_id });
    // order.save();

    return res.json(order);
  }
}

export default new DeliveredOrderController();
