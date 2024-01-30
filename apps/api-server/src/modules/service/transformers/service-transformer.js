const BaseTransformer = require('shared/src/transformers/base-transformer');

module.exports = class ServiceTransformer extends BaseTransformer {
  transform(item) {
    return {
      _id: item?._id ?? null,
      name: item?.name ?? null,
      status: item?.status ?? null,
      departmentId: item?.department_id ?? null,
      dailyLimit: item?.daily_limit ?? null
    };
  }
};
