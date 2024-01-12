const express = require('express');
const { bootstrap } = require('./loaders');

function createServer() {
  const app = express();
  bootstrap(app);
  return app;
}

module.exports = createServer;
