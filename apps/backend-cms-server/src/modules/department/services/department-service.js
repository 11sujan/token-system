const BaseService = require('backend-cms/src/modules/base/services/base.service');
const { department } = require('shared/src/database/models');

module.exports = class DepartmentService extends BaseService {
  constructor() {
    super(department);
    this.filterFields = ['name'];
  }
};
