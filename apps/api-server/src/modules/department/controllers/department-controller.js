const Controller = require('shared/src/controllers/apiBaseController');

module.exports = class DepartmentController extends Controller {
  constructor(opts) {
    super(opts);
    this.service = opts.departmentService;
    this.transformer = opts.departmentTransformer;
  }
};
