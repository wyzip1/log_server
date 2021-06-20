const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken');

const indexRouter = require('./routes/index');

const app = express();
const db = require('./config')();

// view engine setup
app.engine('html', require('ejs').__express)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
    let forbid = ['/chapter/add', '/chapter/update', '/chapter/del', '/auth'];
    console.log(req.url);
    if (!forbid.includes(req.url)) return next();
    try {
        jwt.verify(req.headers.authorization, 'learn_log');
        next()
    } catch (error) {
        res.json({ status: 1, msg: 'token验证失败' });
    }
})
app.use('/', indexRouter);

app.use(function (req, res, next) {
    res.render('index')
});
module.exports = app;
