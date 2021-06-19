const router = require('express').Router();
const type = require('../model/type');
const { success, error } = require('./util');

router.get('/list', async (req, res) => {
    try {
        let data = await type.find();
        res.json(success(data, '类型查询成功'));
    } catch (err) { res.json(error('类型查询异常', err)); }
});

module.exports = router;