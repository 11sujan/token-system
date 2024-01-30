'use strict';
const sequelizePaginate = require('sequelize-paginate');
const { attributes } = require('../migrations/20240111072927-services.js');

module.exports = (sequelize) => {
  const modelDefinition = {
    ...attributes()
  };
  const modelOptions = {
    tableName: 'services',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  };

  const service = sequelize.define('service', modelDefinition, modelOptions);
  sequelizePaginate.paginate(service);
  return service;
};
