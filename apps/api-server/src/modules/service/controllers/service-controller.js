const Controller = require('shared/src/controllers/apiBaseController');

module.exports = class ServiceController extends Controller {
  constructor(opts) {
    super(opts);
    this.service = opts.serviceService;
    this.transformer = opts.serviceTransformer;
  }

  async requestToken(req, res) {
    let data = await this.service.requestToken(req);
    return this.respondWithOutPagination(res, data);
  }
};
