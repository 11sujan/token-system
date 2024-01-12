'use strict';
const sequelizePaginate = require('sequelize-paginate');
const {
  attributes
} = require('../migrations/20240111083759-tokens.js');

module.exports = (sequelize) => {
  const modelDefinition = {
    ...attributes()
  };
  const modelOptions = {
    tableName: 'tokens',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  };

  const token = sequelize.define('token', modelDefinition, modelOptions);
  sequelizePaginate.paginate(token);
  return token;
};