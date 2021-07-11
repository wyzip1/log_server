const router = require('express').Router();
const type = require('../model/type');
const chapter = require('../model/chapter');
const { success, error, logId } = require('./util');

router.get('/list', async (req, res) => {
    try {
        let data = await type.find();
        res.json(success(data, '类型查询成功'));
    } catch (err) { res.json(error('类型查询异常', err)); }
});

router.get('/notloglist', async (req, res) => {
    try {
        let data = await type.find({ $nor: [{ _id: await logId() }] });
        res.json(success(data, '类型查询成功'));
    } catch (err) { res.json(error('类型查询异常', err)); }
});

router.post('/add', async (req, res) => {
    let { name, parent } = req.body;
    parent = parent ? parent : '0';
    try {
        let data = await type.create({ name, parent });
        res.json(success(data, '添加类型成功'));
    } catch (err) { res.json(error('添加类型失败', err)); }
});

router.put('/update', async (req, res) => {
    let { name, parent, id } = req.body;
    parent = parent ? parent : '0';
    try {
        let data = await type.findByIdAndUpdate(id, { name, parent });
        res.json(success(data, '修改类型成功'));
    } catch (err) { res.json(error('修改类型失败', err)); }
});

router.delete('/del', async (req, res) => {
    let { id } = req.query;
    try {
        let count = await chapter.find({ typeId: id }).countDocuments();
        console.log(count);
        if (count > 0) return res.json(error('仍有文章属于此类型'));
        let data = await type.findByIdAndDelete(id);
        res.json(success(data, '删除类型成功'));
    } catch (err) { res.json(error('删除类型失败', err)); }
});

module.exports = router;