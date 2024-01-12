const Controller = require('backend-cms/src/modules/base/controllers/baseController');

module.exports = class ServicesController extends Controller {
  constructor(opts) {
    super(opts);
	 this.service = opts.servicesService;
    this.title = 'Service';
    this.view = '../services';
    this.url = '/department';
    this.module = 'service.service.';
  }

};
