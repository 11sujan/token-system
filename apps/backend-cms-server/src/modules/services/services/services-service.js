const BaseService = require('backend-cms/src/modules/base/services/base.service');
const { service } = require('shared/src/database/models');

module.exports = class ServicesService extends BaseService {
  constructor() {
    super(service);
    this.filterFields = ['name'];
  }

};
