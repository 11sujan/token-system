const BaseService = require('shared/src/services/api.base.service');
const { service, token, requestLog } = require('shared/src/database/models');
const db = require('shared/src/config/database').postgres;
const sequelize = require('sequelize');
const { Op } = sequelize;

module.exports = class ServiceService extends BaseService {
  constructor() {
    super(service);
    this.token = token;
    this.requestLog = requestLog;
  }

  buildFilterQuery(req, whereCondition = {}) {
    const { query } = req;
    const departmentId = req.params.departmentId;
    if (query.keyword) {
      return {
        where: { [Op.or]: this.buildKeywordQuery(query.keyword) }
      };
    }
    whereCondition.department_id = departmentId;
    whereCondition.status = true;
    return { where: whereCondition };
  }

  async requestToken(req) {
    const trx = await db.transaction();
    try {
      let serviceId = await this.findOrFail(req.body.serviceId);
      let loginId = req.user.id;
      let token = await this.generateRandomToken(serviceId.id);
      const data = await this.token.create({
        user_id: loginId,
        service_id: serviceId.id,
        expiration_date: new Date().toISOString().split('T')[0],
        token: token,
        status: true
      });

      await this.requestLog.create({
        user_id: loginId,
        service_id: serviceId.id,
        request_date: new Date().toISOString().split('T')[0]
      });

      await trx.commit();
      return {
        token: data.token,
        expirationDate: data.expiration_date,
        status: 'success',
        msg: 'Service request successful.'
      };
    } catch (e) {
      console.log(e);
      await trx.rollback();
    }
  }

  async generateRandomToken(serviceId) {
    const day = new Date().getDate().toString().padStart(2, '0');
    let TokenCount = await token.count({
      where: {
        service_id: serviceId
      }
    });
    return `${serviceId}-${day}${TokenCount.toString().padStart(5, '0')}`;
  }
};
