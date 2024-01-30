const express = require('express');
const router = express.Router();
const {
  container
} = require('shared/src/providers/container-service-provider');
const {
  checkPermission
} = require('../../../middlewares/permissionMiddleware');
const wrapNext = require('shared/src/middlewares/wrapNext');
const frontendUsersController = container.resolve('frontendUsersController');

router.get(
  '/',
  [checkPermission('frontendUser.frontendUser.view')],
  wrapNext(frontendUsersController.index)
);

module.exports = router;
