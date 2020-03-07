import * as Yup from 'yup';
import { Op } from 'sequelize';

import Orders from '../Models/Orders';
import Recipient from '../Models/Recipient';
import Deliveryman from '../Models/Deliveryman';
import Files from '../Models/Files';

import Queue from '../../lib/Queue';
import newOrder from '../jobs/newOrder';

class OrderController {
  async index(req, res) {
    const { q: productName, page = 1 } = req.query;

    if (productName) {
      const product = await Orders.findAll({
        where: {
          product: {
            [Op.iLike]: `%${productName}%`,
          },
        },
        limit: 10,
        offset: (page - 1) * 10,
        order: [['id', 'DESC']],
        attributes: [
          'id',
          'product',
          'canceled_at',
          'start_date',
          'end_date',
          'signature_id',
        ],
        include: [
          {
            model: Files,
            as: 'signature',
            attributes: ['url', 'path'],
          },
          {
            model: Deliveryman,
            as: 'deliveryman',
            attributes: ['id', 'name'],
            include: [
              {
                model: Files,
                as: 'avatar',
                attributes: ['url', 'path'],
              },
            ],
          },
          {
            model: Recipient,
            as: 'recipient',
            attributes: [
              'id',
              'name',
              'street',
              'city',
              'country',
              'number',
              'postcode',
            ],
          },
        ],
      });

      return res.status(200).json(product);
    }

    const orders = await Orders.findAll({
      limit: 10,
      offset: (page - 1) * 10,
      order: [['id', 'DESC']],
      attributes: [
        'id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
        'signature_id',
      ],
      include: [
        {
          model: Files,
          as: 'signature',
          attributes: ['url', 'path'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name'],
          include: [
            {
              model: Files,
              as: 'avatar',
              attributes: ['url', 'path'],
            },
          ],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'country',
            'city',
            'postcode',
          ],
        },
      ],
    });

    return res.json(orders);
  }

  async show(req, res) {
    const { id } = req.params;

    const order = await Orders.findByPk(id, {
      where: { canceled_at: null },
      attributes: ['id', 'product', 'canceled_at', 'start_date', 'end_date'],
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name'],
          include: [
            {
              model: Files,
              as: 'avatar',
              attributes: ['url', 'path'],
            },
          ],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'city',
            'postcode',
            'country',
          ],
        },
        {
          model: Files,
          as: 'signature',
          attributes: ['url', 'path'],
        },
      ],
    });

    return res.json(order);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { product, recipient_id, deliveryman_id, id } = req.body;

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);
    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman doest not exists.' });
    }

    const recipient = await Recipient.findByPk(recipient_id);
    if (!recipient) {
      return res.status(401).json({ error: 'Recipient doest not exists.' });
    }

    Orders.create({ product, recipient_id, deliveryman_id });

    await Queue.add(newOrder.key, {
      deliverymanName: deliveryman.name,
      deliverymanEmail: deliveryman.email,
      recipientName: recipient.name,
      recipientStreet: recipient.street,
      recipientNumber: recipient.number,
      recipientCity: recipient.city,
      recipientPostcode: recipient.postcode,
      recipientCountry: recipient.country,
      recipientComplement: recipient.complement,
    });

    return res.json({
      id,
      product,
      recipient_id,
      deliveryman_id,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const schema = Yup.object().shape({
      product: Yup.string(),
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
    });

    const { product, recipient_id, deliveryman_id } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const order = await Orders.findByPk(id);

    order.update({ product, recipient_id, deliveryman_id });

    return res.json(order);
  }
}

export default new OrderController();
