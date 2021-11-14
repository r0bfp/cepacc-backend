const express = require('express');

const routes = require('../routes.js');
require('../database/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(routes);

module.exports = { app, PORT };