const express = require('express');
const router = express.Router();
const { chapter, content: _content, user, type } = require('../model');
const { success, error } = require('./util');

router.get('/list', async (req, res) => {
    let { page, size } = req.body;
    try {
        let docs = await chapter.find().skip((page - 1) * size).limit(size * 1).exec();
        for (let doc of docs) {
            let udata = await user.findById(doc.userId);
            let ctype = await type.findById(doc.typeId);
            doc.user = udata;
            doc.type = ctype;
        }
        res.json(success(doc, '查询文章列表成功'));
    } catch (err) { res.json(error('查询文章列表异常', err)); }
})

router.post('/add', async (req, res) => {
    let { title, userId, content, typeId } = req.body;
    try {
        let data = await chapter.create({ title, userId, updateTime: new Date(), typeId: typeId | '0' });
        let c = await _content.create({ chapterId: data._id, content });
        data.content = c;
        res.json(success(data, '添加文章日志成功'));
    } catch (err) { error('添加文章日志失败', err); }
})

router.put('/update', async (req, res) => {
    let { chapterId, title, typeId } = req.body;
    try {
        let data = chapter.findByIdAndUpdate(chapterId, { title, updateTime: new Date(), typeId });
        res.json(success(data, '更新文章标题成功'));
    } catch (err) { error('更新文章标题失败', err) }
})

router.delete('/del', async (req, res) => {
    let { chapterId } = req.body;
    try {
        let content = await _content.find({ chapterId });
        let data1 = await _content.findByIdAndDelete(content._id);
        let data2 = await chapter.findByIdAndDelete(chapterId);
        res.json(success({ chapter: data1, content: data2 }, '删除文章日志成功'));
    } catch (err) {
        res.json(error('删除文章日志失败', err));
    }
})

module.exports = router;