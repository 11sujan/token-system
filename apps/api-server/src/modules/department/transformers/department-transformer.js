const BaseTransformer = require('shared/src/transformers/base-transformer');

module.exports = class DepartmentTransformer extends BaseTransformer {
  transform(item) {
    return {
      _id: item?._id ?? null,
      name: item?.name ?? null,
      status: item?.status ?? null,
      created_at: item?.created_at ?? null
    };
  }
};
