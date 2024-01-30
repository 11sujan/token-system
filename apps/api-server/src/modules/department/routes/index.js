const express = require('express');
const wrapNext = require('shared/src/middlewares/wrapNext');

const {
  container
} = require('shared/src/providers/container-service-provider');
const departmentController = container.resolve('departmentController');
// const ServiceController = container.resolve('ServiceController');
const router = express.Router();

router.get('/', wrapNext(departmentController.getAllResource));

// Get Services
// router.get('/:departmentId/services',wrapNext(ServiceController.getAllResource));

module.exports = router;
