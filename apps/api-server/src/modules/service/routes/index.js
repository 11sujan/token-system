const express = require('express');
const router = express.Router();
const wrapNext = require('shared/src/middlewares/wrapNext');

const {
  container
} = require('shared/src/providers/container-service-provider');
const serviceController = container.resolve('serviceController');

router.get(
  '/:departmentId/department',
  wrapNext(serviceController.getAllResource)
);
router.post('/request-service', wrapNext(serviceController.requestToken));

module.exports = router;
