const Sequelize = require('sequelize');

const config = require('../config/database');

const Course = require('../models/Course');
const User = require('../models/User');
const Modality = require('../models/Modality');

const connection = new Sequelize(config);

Course.init(connection);
User.init(connection);
Modality.init(connection);

Course.associate(connection.models)
User.associate(connection.models)
Modality.associate(connection.models)


module.exports = connection;