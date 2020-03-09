import {
  isAfter,
  isBefore,
  setHours,
  setMinutes,
  setSeconds,
  parseISO,
} from 'date-fns';
import { Op } from 'sequelize';
import Recipient from '../Models/Recipient';
import Orders from '../Models/Orders';
import Deliveryman from '../Models/Deliveryman';

class DeliverymanController {
  async index(req, res) {
    /** query to search for undelivered and undelivered orders */
    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id);
    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman doest not exists.' });
    }

    const orders = await Orders.findAll({
      where: { deliveryman_id: id, canceled_at: null, end_date: null },
      order: [['id', 'DESC']],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name', 'street', 'number', 'country', 'city'],
        },
      ],
    });

    return res.json(orders);
  }

  async update(req, res) {
    const { start_date, order_id } = req.body;
    /** setting start date and end date of the day */
    const startInterval = setSeconds(
      setMinutes(setHours(parseISO(start_date), 8), 0),
      0
    );
    const endInterval = setSeconds(
      setMinutes(setHours(parseISO(start_date), 18), 0),
      0
    );
    const { id } = req.params;

    /** Check with the time is between 08:00 and 18:00 */
    if (!isBefore(parseISO(start_date), endInterval)) {
      return res
        .status(400)
        .json({ error: 'Withdrawal available between 08:00 and 18:00' });
    }

    if (!isAfter(parseISO(start_date), startInterval)) {
      return res
        .status(400)
        .json({ error: 'Withdrawal available between 08:00 and 18:00' });
    }

    const order = await Orders.findByPk(order_id);

    /** Check if order is available */
    if (order.start_date) {
      res.status(400).json({ error: 'order already withdrawn' });
    }

    /** Check if the delivery man have more than 5 orders */
    const withdrawnOrder = await Orders.findAll({
      where: {
        deliveryman_id: id,
        start_date: { [Op.between]: [startInterval, endInterval] },
      },
    });

    if (withdrawnOrder.length === 5) {
      res.status(400).json({ error: 'You can only take 5 orders per day' });
    }

    order.update({ start_date });
    order.save();

    return res.json(withdrawnOrder);
  }
}

export default new DeliverymanController();
