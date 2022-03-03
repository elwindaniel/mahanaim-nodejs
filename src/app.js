require('dotenv').config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const { errorHandler } = require("./utilities/responseHandler.utilities");

mongoose.connect(process.env.MONGODB_URI_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
  res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


 app.use('/api', require('./routes'));
 app.use(errorHandler);
module.exports = app;