const BaseService = require('shared/src/services/api.base.service');
const { department } = require('shared/src/database/models');
const sequelize = require('sequelize');
const { Op } = sequelize;

module.exports = class DepartmentService extends BaseService {
  constructor() {
    super(department);
  }

  buildFilterQuery(req, whereCondition = {}) {
    const { query } = req;
    if (query.keyword) {
      return {
        where: { [Op.or]: this.buildKeywordQuery(query.keyword) }
      };
    }
    whereCondition.status = true;
    return { where: whereCondition };
  }
};
