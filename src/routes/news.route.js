const express = require('express');
const route = express.Router();

const newsController = require('../app/controllers/NewsController');

route.use('/:slugs', newsController.showDetail)
route.use('/', newsController.index);

module.exports = route;