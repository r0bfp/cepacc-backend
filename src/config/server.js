const express = require('express');
const cors = require('cors');

const routes = require('../routes.js');
require('../database/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = { app, PORT };