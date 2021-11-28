const mongoose = require('mongoose');

let typeSchema = mongoose.Schema({
    name: String,
    createTime: { type: Date, default: new Date() },
    parent: { type: String, default: '0' }
});

let type = mongoose.model('type', typeSchema, 'type');

module.exports = type;