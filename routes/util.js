exports.success = (data, msg) => ({ status: 0, meta: { msg, data } });

exports.error = (msg, err) => {
    console.log(err);
    return { status: 1, meta: { msg } }
};