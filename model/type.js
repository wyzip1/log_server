const mongoose = require('mongoose');

let typeSchema = mongoose.Schema({
    name: String,
    createTime: { type: Date, default: new Date() },
    parent: { type: String, default: '0' }
});

let type = mongoose.model('type', typeSchema, 'type');

type.findOne({ name: '日志' }).then(res => {
    if (!res) type.create({ name: '日志' }).then(res => {
        console.log(res);
    });
})

module.exports = type;