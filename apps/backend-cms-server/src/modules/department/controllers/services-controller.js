const Controller = require('backend-cms/src/modules/base/controllers/baseController');
const { checkBlankEntries, base64encode } = require('shared/src/helpers');

module.exports = class ServicesController extends Controller {
  constructor(opts) {
    super(opts);
    this.service = opts.servicesService;
    this.title = 'Service';
    this.view = '../services';
    this.url = '/department';
    this.module = 'service.service.';
  }

  async index(req, res) {
    try {
      this.innerPage = this.view + '/index';
      let data = await this.service.indexPageData(req);
      const department = await this.service.getDepartmentId(req.params.id);
      data.breadcrumbs = [
        { title: `Department (${department.name})`, link: '/department' },
        { title: 'Service' }
      ];
      data.department_id = req.params.id;
      req.session.cancelUrl = req.originalUrl;
      return res.render(
        'layout/base-inner',
        this.viewData(data, this.module + 'view')
      );
    } catch (error) {
      console.log(error);
      req.flash('error_msg', error.message);
      return res.redirect('/home');
    }
  }

  async addView(req, res) {
    try {
      this.innerPage = this.view + '/add';
      const data = await this.service.createPageData(req);
      data.department_id = req.params.departmentId;
      data.breadcrumbs = [
        {
          title: 'Service',
          link: `/department/${req.params.departmentId}/service`
        },
        { title: 'Create' }
      ];
      return res.render(
        'layout/base-inner',
        this.viewData(data, this.module + 'create', 'Add ' + this.title)
      );
    } catch (error) {
      req.flash('error_msg', error.message);
      return res.redirect('back');
    }
  }

  async add(req, res) {
    try {
      await this.service.create(
        checkBlankEntries(req.body),
        req.params.departmentId
      );
      req.flash('success_msg', this.title + ' added successfully.');
      return res.redirect(`/department/${req.params.departmentId}/service`);
    } catch (error) {
      req.flash('inputData', req.body);
      req.flash('error_msg', error.message);
      return res.redirect('back');
    }
  }

  async editView(req, res) {
    try {
      this.innerPage = this.view + '/edit';
      const data = await this.service.editPageData(req.params.id);
      data.department_id = req.params.departmentId;
      const version = JSON.parse(JSON.stringify(data)).data.version;
      if (version) {
        data.verNum = base64encode(version.toString());
      }
      data.breadcrumbs = this.formBreadCrumb('Edit', req?.session?.cancelUrl);
      return res.render(
        'layout/base-inner',
        this.viewData(data, this.module + 'edit', 'Edit ' + this.title)
      );
    } catch (error) {
      req.flash('error_msg', error.message);
      return res.redirect(`/department/${req.params.departmentId}/service`);
    }
  }

  async edit(req, res) {
    try {
      await this.service.findAndUpdate(
        req.params.id,
        req.params.departmentId,
        checkBlankEntries(req.body)
      );
      req.flash('success_msg', this.title + ' updated successfully');
      return res.redirect(`/department/${req.params.departmentId}/service`);
    } catch (error) {
      req.flash('inputData', req.body);
      req.flash('error_msg', error.message);
      return res.redirect(`/department/${req.params.departmentId}/service`);
    }
  }
};
