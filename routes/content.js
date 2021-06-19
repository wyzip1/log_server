const express = require('express');
const router = express.Router();
const content = require('../model/content');
const { success, error } = require('./util');

router.get('/detail/:id', async (req, res) => {
    let { id } = req.params;
    try {
        let data = await content.findOne({ chapterId: id });
        res.json(success(data, '查询文章详情成功'));
    } catch (err) {
        res.json(error('查询文章详情异常'));
    }
})

module.exports = router;