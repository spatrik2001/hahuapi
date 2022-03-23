var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hahuRouter = require('./routes/hahu');

const MONGODB_URI = "mongodb://127.0.0.1:27017/hahu";
mongoose
.connect(MONGODB_URI, { useNewUrlParser: true })
.then(console.log("Connected to MongoDB"))
.catch((err) => {
    console.log(err);
});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/hahu', hahuRouter);

module.exports = app;
