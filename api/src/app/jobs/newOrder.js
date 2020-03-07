import Mail from '../../lib/Mail';

class WelcomeMail {
  get key() {
    return 'newOrder';
  }

  async handle({ data }) {
    const {
      deliverymanName,
      deliverymanEmail,
      recipientName,
      recipientStreet,
      recipientNumber,
      recipientCity,
      recipientPostcode,
      recipientCountry,
      recipientComplement,
    } = data;

    // eslint-disable-next-line no-console
    console.log(data);

    await Mail.sendMail({
      to: deliverymanEmail,
      subject: 'Order registred',
      template: 'newOrder',
      context: {
        deliverymanName,
        recipientName,
        recipientStreet,
        recipientNumber,
        recipientCity,
        recipientPostcode,
        recipientCountry,
        recipientComplement,
      },
    });
  }
}

export default new WelcomeMail();
