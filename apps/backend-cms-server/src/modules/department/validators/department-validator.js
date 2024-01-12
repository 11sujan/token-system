const { checkSchema } = require('express-validator');
const { emailTemplate } = require('shared/src/database/models');
const { Op } = require('sequelize');
const { checkMaxLength, required } = require('shared/src/helpers');

let DepartmentValidation = checkSchema({
  name: {
    custom: {
      options: function (value, { req }) {
        required('Title', value);
        if (typeof req.body.name !== 'undefined') {
          return checkMaxLength('Title', req.body.name, 50);
        } else {
          return true;
        }
      }
    }
  }
});

module.exports = { DepartmentValidation };
