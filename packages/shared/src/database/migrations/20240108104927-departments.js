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
    name: { type: DataTypes.STRING, defaultValue: '' },
    status: { type: DataTypes.BOOLEAN, allowNull: true },
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
    return queryInterface.createTable('departments', attributes());
  },

  async down(queryInterface) {
    return queryInterface.dropTable('departments');
  },
  attributes
};
