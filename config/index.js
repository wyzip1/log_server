const mongoose = require('mongoose');
const { mongodb_url, setting } = require('./options');

module.exports = function () {
    let db = mongoose.connect(mongodb_url, setting);
    require('../model');
    return db;
}