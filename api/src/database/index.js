import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/Models/User';
import Recipient from '../app/Models/Recipient';
import Deliveryman from '../app/Models/Deliveryman';
import Orders from '../app/Models/Orders';
import Files from '../app/Models/Files';
import DeliveryProblem from '../app/Models/DeliveryProblem';

const models = [User, Recipient, Files, Deliveryman, Orders, DeliveryProblem];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
