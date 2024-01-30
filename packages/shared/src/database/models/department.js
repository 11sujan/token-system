'use strict';
const sequelizePaginate = require('sequelize-paginate');
const { attributes } = require('../migrations/20240108104927-departments.js');
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
  department.associate = (models) => {
    department.hasMany(models.service, {
      foreignKey: 'department_id',
      as: 'services'
    });
  };
  sequelizePaginate.paginate(department);
  return department;
};
