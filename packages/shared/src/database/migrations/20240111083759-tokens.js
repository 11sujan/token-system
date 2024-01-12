'use strict';
const { DataTypes, Sequelize } = require('sequelize');

const attributes = () => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'services',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'frontend_users',
        key: 'id'
      }
    },
    token: { type: DataTypes.STRING,  unique: true, allowNull: false },
    status: { type: DataTypes.BOOLEAN, allowNull: true },
    expiration_date: {type: DataTypes.DATE, allowNull: false},
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now')
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now')
    }
  };
};
module.exports = {
  async up(queryInterface) {
    return queryInterface.createTable('tokens', attributes());
  },

  async down(queryInterface) {
    return queryInterface.dropTable('tokens');
  },
  attributes
};