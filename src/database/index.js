const Sequelize = require('sequelize');

const config = require('../config/database');
const Course = require('../models/Course');

const connection = new Sequelize(config);

Course.init(connection);


module.exports = connection;