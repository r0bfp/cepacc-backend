const { Router } = require('express');

const Course = require('./controllers/Course');
const User = require('./controllers/User');

const routes = Router();

routes.post('/courses/store', Course.store);
routes.get('/courses/list', Course.list);

module.exports = routes;