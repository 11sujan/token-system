const express = require('express');
const router = express.Router();
const {
  container
} = require('shared/src/providers/container-service-provider');
const serviceController = container.resolve('ServicesController');
const { checkPermission } = require('backend-cms/src/middlewares');
const { validate } = require('shared/src/middlewares');
// const { DepartmentValidation } = require('../validators');

const wrapNext = require('shared/src/middlewares/wrapNext');

router.get(
  '/create',
  [checkPermission('service.service.create')],
  wrapNext(serviceController.addView)
);
router.post(
  '/',
  [
    checkPermission('service.service.create'),
	// serviceValidation,
    validate
  ],
  wrapNext(serviceController.add)
);
router.get(
  '/:id',
  [checkPermission('service.service.edit')],
  wrapNext(serviceController.editView)
);
router.put(
  '/:id',
  [
    checkPermission('service.service.edit'),
    // serviceValidation,
    validate
  ],
  wrapNext(serviceController.edit)
);
router.delete(
  '/:id',
  checkPermission('service.service.view'),
  wrapNext(serviceController.delete)
);

module.exports = router;
