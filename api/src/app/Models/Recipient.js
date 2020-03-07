import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        city: Sequelize.STRING,
        postcode: Sequelize.STRING,
        country: Sequelize.STRING,
        complement: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Recipient;
