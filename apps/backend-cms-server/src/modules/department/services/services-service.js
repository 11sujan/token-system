const BaseService = require('backend-cms/src/modules/base/services/base.service');
const { service,department } = require('shared/src/database/models');

module.exports = class ServicesService extends BaseService {
  constructor() {
    super(service);
    this.filterFields = ['name'];
  }

  async indexPageData(req) {
    return {
      ...(await this.getData(req))
    };
  }

  async getData(req) {
    let order = req.query.order ? req.query.order : 'id';
    let sort = req.query.sort ? req.query.sort : 'DESC';

    const payload = {
      ...await this.buildFilterQuery(req),
      order: [[order, sort]],
      page: req.query.page ?? 1
    };

    const selectedColumns = this.selectedColumns || [];
    if (selectedColumns.length > 0) {
      payload['attributes'] = selectedColumns;
    }

    const orderBy = this.orderBy || [];
    if (orderBy.length > 0) {
      payload['order'] = orderBy;
    }

    return this.getPaginatedData(payload);
  }

  async buildFilterQuery(req, whereCondition = null) {
    const { query } = req;
    const department = await this.getDepartmentId(req.params.id);
    if (whereCondition === null) {
      whereCondition = {};
    }
    whereCondition.department_id = department.id;
    if (query.keyword) {

      whereCondition[Op.or] = this.buildKeywordQuery(query.keyword);
    }

    return { where: whereCondition };
  }

  buildKeywordQuery(keyword) {
    const queryArray = [];
    const filterArray = this.filterFields;
    for (const field of filterArray) {
      queryArray.push({
        [field]: { [Op.iLike]: `%${keyword.trim()}%` }
      });
    }
    return queryArray;
  }

  dateRangeFilterQuery(query, dateColumn = 'created_at') {
    let filterQuery = {};
    let from = moment().subtract(30, 'd').startOf('day');
    let to = moment().endOf('day');

    if (query.daterange) {
      const range = query.daterange.split('-');
      from = moment(range[0].trim(), 'MM/DD/YYYY').startOf('day');
      to = moment(range[1].trim(), 'MM/DD/YYYY').endOf('day');
    }
    filterQuery[dateColumn] = {
      [Op.between]: [new Date(from), new Date(to)]
    };
    return { ...filterQuery };
  }

  async getPaginatedData(query = {}) {
    query.paginate = this.paginate !== undefined ? this.paginate : this.limit;
    const { docs, pages, total } = await this.model.paginate(query);
    let from = (query.page - 1) * query.paginate + 1;
    let to = from + (docs.length - 1);
    return {
      docs,
      total,
      pageNum: query.page,
      pageLimit: query.paginate,
      pageCount: pages,
      queryValue: query.keyword ?? null,
      currentPage: query.page,
      from,
      to
    };
  }

  async create(data, id,trx = null) {
    if (this.clearCache) {
      await redis.clearPaginationCache(this.cacheKey);
    }
     let department = await this.getDepartmentId(id);
     data.department_id = department.id;
    return this.model.create(data, { transaction: trx });
  }

  async findAndUpdate(id, departmentId,data, trx = null) {
    await this.checkExists({ _id: id });
    if (this.clearCache) {
      await redis.clearPaginationCache(this.cacheKey);
    }
    let department = await this.getDepartmentId(departmentId);
    data.department_id = department.id;
    return this.model.update(data, {
      where: { _id: id },
      individualHooks: true,
      transaction: trx
    });
  }

    async getDepartmentId(id){
      const departmentData = await department.findOne({
        where : {
          _id : id
        }, attributes : ['id','name']
      });
      return departmentData;
    }

    

};
