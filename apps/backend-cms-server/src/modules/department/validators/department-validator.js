const { checkSchema } = require('express-validator');
const { checkMaxLength, required, numeric } = require('shared/src/helpers');

let DepartmentValidation = checkSchema({
  name: {
    custom: {
      options: function (value, { req }) {
        required('Department Title', value);
        if (typeof req.body.name !== 'undefined') {
          return checkMaxLength('Department Title', req.body.name, 50);
        } else {
          return true;
        }
      }
    }
  }
});

let ServiceValidation = checkSchema({
  name: {
    custom: {
      options: function (value, { req }) {
        required('Service Title', value);
        if (typeof req.body.name !== 'undefined') {
          return checkMaxLength('Service Title', req.body.name, 50);
        } else {
          return true;
        }
      }
    }
  },

  daily_limit: {
    custom: {
      options: function (value, { req }) {
        required('Daily limit', value);
        numeric('Daily limit', value);
        if (typeof req.body.name !== 'undefined') {
          return checkMaxLength('Daily limit', req.body.name, 50);
        } else {
          return true;
        }
      }
    }
  }
});

module.exports = { DepartmentValidation, ServiceValidation };
