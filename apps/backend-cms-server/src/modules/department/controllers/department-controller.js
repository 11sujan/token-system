const Controller = require('backend-cms/src/modules/base/controllers/baseController');

module.exports = class DepartmentController extends Controller {
  constructor(opts) {
    super(opts);
    this.service = opts.departmentService;
    this.title = 'Department';
    this.view = '../departments';
    this.url = '/department';
    this.module = 'department.department.';
  }
};
