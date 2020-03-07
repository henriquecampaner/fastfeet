module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('deliverymans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avatar_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'files', key: 'id' },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('deliverymans');
  },
};
