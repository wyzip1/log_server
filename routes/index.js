const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const user = require('../model/user');
const { success, error } = require('./util');
const chapterRouter = require('./chapter');
const content = require('./content');
const type = require('./type');


router.post('/login', function (req, res) {
    let { account, password } = req.body;
    user.findOne({ account, password }).then(data => {
        if (!data) return res.json(error('账号或密码错误'));
        let token = jwt.sign(data._doc, 'learn_log', { expiresIn: 60 * 60 * 24 });
        data._doc.token = token;
        res.json(success(data, '登陆成功'));
    }).catch(err => res.json(error('登录异常', err)));
});

router.post('/register', function (req, res) {
    let { account, password, username } = req.body;
    user.create({ account, password, username }).then(data => {
        res.json(success(data, '注册账号成功'));
    }).catch(err => {
        const msg = err.code === 11000 ? account + ' 已存在' : '注册异常'
        res.json(error(msg, err));
    });
});

router.post('/auth', function (req, res) {
    res.json(success({}, '验证成功'));
});

router.use('/chapter', chapterRouter);
router.use('/content', content);
router.use('/type', type);

module.exports = router;
