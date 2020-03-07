import Mail from '../../lib/Mail';

class QuestionAnsweredMail {
  get key() {
    return 'CancelOrder';
  }

  async handle({ data }) {
    const { order, deliveryman } = data;

    await Mail.sendMail({
      to: deliveryman.email,
      subject: `Order canceled`,
      template: 'orderCanceled',
      context: {
        orderId: order.id,
        deliverymanName: deliveryman.name,
      },
    });
  }
}

export default new QuestionAnsweredMail();
