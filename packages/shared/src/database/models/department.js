'use strict';
const sequelizePaginate = require('sequelize-paginate');
const {
  attributes
} = require('../migrations/20240108104927-departments.js');
module.exports = (sequelize) => {
  const modelDefinition = {
    ...attributes()
  };
  let modelOptions = {
    tableName: 'departments',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  };
  const department = sequelize.define(
    'department',
    modelDefinition,
    modelOptions
  );
  sequelizePaginate.paginate(department);
  return department;
};
