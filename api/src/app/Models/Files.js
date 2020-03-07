import Sequelize, { Model } from 'sequelize';

class Files extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:8033/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Files;
