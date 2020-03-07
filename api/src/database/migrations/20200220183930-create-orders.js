module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      recipient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'recipients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      deliveryman_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'deliverymans',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      signature_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      canceled_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: true,
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
    return queryInterface.dropTable('orders');
  },
};
