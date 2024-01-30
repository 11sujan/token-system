const BaseService = require('backend-cms/src/modules/base/services/base.service');
const { frontendUser } = require('shared/src/database/models');

module.exports = class FrontendUsersService extends BaseService {
  constructor() {
    super(frontendUser);
    this.filterFields = ['name'];
  }
};
