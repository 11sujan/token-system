const Controller = require('backend-cms/src/modules/base/controllers/baseController');

module.exports = class FrontendUsersController extends Controller {
  constructor(opts) {
    super(opts);
    this.service = opts.frontendUsersService;
    this.title = 'Frontend Users';
    this.view = '../frontend-users';
    this.url = '/frontend-users';
    this.module = 'frontendUser.frontendUser.';
  }
};
