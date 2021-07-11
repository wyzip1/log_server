const { type } = require('../model');

exports.success = (data, msg) => ({ status: 0, meta: { msg, data } });

exports.error = (msg, err) => {
    console.log(err);
    return { status: 1, meta: { msg } }
};

exports.logId = async () => {
    let log = await type.findOne({ name: '日志' });
    return log._id;
};