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
    _id: {
      allowNull: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departments',
        key: 'id'
      }
    },
    name: { type: DataTypes.STRING, defaultValue: '' },
    daily_limit: { type: DataTypes.INTEGER, allowNull: false },
    current_usage: { type: DataTypes.INTEGER, defaultValue: 0 },
    status: { type: DataTypes.BOOLEAN, allowNull: true },
    token_count: { type: DataTypes.INTEGER, defaultValue: 0 },
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
    return queryInterface.createTable('services', attributes());
  },

  async down(queryInterface) {
    return queryInterface.dropTable('services');
  },
  attributes
};