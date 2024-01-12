const express = require('express');
const router = express.Router();
const {
  container
} = require('shared/src/providers/container-service-provider');
const departmentController = container.resolve('departmentController');
const serviceController = container.resolve('servicesController');

const { checkPermission } = require('backend-cms/src/middlewares');
const { validate } = require('shared/src/middlewares');
const { DepartmentValidation } = require('../validators');

const wrapNext = require('shared/src/middlewares/wrapNext');

router.get(
  '/',
  [checkPermission('department.department.view')],
  wrapNext(departmentController.index)
);
router.get(
  '/create',
  [checkPermission('department.department.create')],
  wrapNext(departmentController.addView)
);
router.post(
  '/',
  [
    checkPermission('department.department.create'),
	DepartmentValidation,
    validate
  ],
  wrapNext(departmentController.add)
);
router.get(
  '/:id',
  [checkPermission('department.department.edit')],
  wrapNext(departmentController.editView)
);
router.put(
  '/:id',
  [
    checkPermission('department.department.edit'),
    DepartmentValidation,
    validate
  ],
  wrapNext(departmentController.edit)
);
router.delete(
  '/:id',
  checkPermission('department.department.delete'),
  wrapNext(departmentController.delete)
);

router.get(
  '/:id/service',
  [checkPermission('department.department.view')],
  wrapNext(serviceController.index)
);

module.exports = router;
