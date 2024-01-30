'use strict';
const sequelizePaginate = require('sequelize-paginate');
const { attributes } = require('../migrations/20240111090116-request_logs.js');

module.exports = (sequelize) => {
  const modelDefinition = {
    ...attributes()
  };
  const modelOptions = {
    tableName: 'request_logs',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  };

  const requestLog = sequelize.define(
    'requestLog',
    modelDefinition,
    modelOptions
  );
  sequelizePaginate.paginate(requestLog);
  return requestLog;
};
