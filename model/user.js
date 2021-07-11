const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    account: String,
    password: String,
    createTime: { type: Date, default: new Date() },
    updateTime: Date,
    lv: { type: Number, default: 0 }
});

let user = mongoose.model('user', userSchema, 'user');

user.find().countDocuments((err, count) => {
    if (err) throw err;
    if (!count) {
        user.create({ account: '2362086452', password: 'ylhm4523', lv: Infinity })
            .then(() => console.log('账号初始化成功'))
            .catch(err => console.log('账号初始化失败', err));
    }
})

module.exports = user;