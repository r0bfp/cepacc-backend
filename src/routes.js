const { Router } = require('express');

const Course = require('./controllers/Course');

const routes = Router();

routes.post('/', Course.store);

module.exports = routes;