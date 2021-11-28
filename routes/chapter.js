const express = require('express');
const router = express.Router();
const { chapter, content: _content, user, type } = require('../model');
const { success, error, logId } = require('./util');

router.get('/list', async (req, res) => {
    let { page, size, typeId, title, userId } = req.query;
    let regTitle = new RegExp(title);
    let condition = [{ title: { $regex: regTitle } }];
    typeId && condition.push({ typeId });
    userId && condition.push({ userId });
    try {
        let docs = await chapter.find({ $and: condition, $nor: [{ typeId: await logId() }] })
            .skip((page - 1) * size)
            .sort({ _id: -1 }).limit(size * 1).exec();

        // 计算总计页数
        let count = await chapter.find({ $nor: [{ typeId: await logId() }] }).countDocuments();
        let _total = Math.floor(count / size);
        let total_page;
        if (count < size) total_page = 1;
        else total_page = count % size ? _total + 1 : _total;

        // 绑定信息
        for (let doc of docs) {
            let udata = await user.findById(doc.userId);
            let ctype = await type.findById(doc.typeId);
            doc._doc.user = udata;
            doc._doc.type = ctype;
        }
        res.json(success({ docs, total_page }, '查询文章列表成功'));
    } catch (err) { res.json(error('查询文章列表异常', err)); }
})

router.get('/chapterInfo', async (req, res) => {
    let { chapterId } = req.query;
    try {
        let doc = await chapter.findById(chapterId);
        let content = await _content.findOne({ chapterId });
        let _type = await type.findById(doc.typeId);
        let _user = await user.findById(doc.userId);
        doc._doc.content = content._doc.content;
        doc._doc.type = _type._doc.name;
        doc._doc.account = _user._doc.account;
        doc._doc.username = _user._doc.username;
        res.json(success(doc, '查询文章信息成功'));
    } catch (err) { res.json(error('查询文章信息失败', err)); }

})

router.get('/log', async (req, res) => {
    let { page, size, title, userId } = req.query;
    let regTitle = new RegExp(title);
    let typeId = await logId();
    try {
        let docs = await chapter.find({ $and: [{ title: { $regex: regTitle }, typeId, userId }] })
            .skip((page - 1) * size).sort({ _id: -1 })
            .limit(size * 1).exec();

        // 计算总计页数
        let count = await chapter.find({ typeId, userId }).countDocuments();
        let _total = Math.floor(count / size);
        let total_page;
        if (count < size) total_page = 1;
        else total_page = count % size ? _total + 1 : _total;

        // 绑定信息
        let ctype = await type.findById(typeId);
        for (let doc of docs) {
            let udata = await user.findById(doc.userId);
            doc._doc.user = udata;
            doc._doc.type = ctype;
        }
        res.json(success({ docs, total_page }, '查询日志成功'));
    } catch (err) { res.json(error('查询日志列表异常', err)); }
});

router.post('/add', async (req, res) => {
    let { title, userId, content, typeId, briefIntroduction } = req.body;
    try {
        let data = await chapter.create({ title, userId, updateTime: new Date(), typeId, briefIntroduction });
        let c = await _content.create({ chapterId: data._id, content });
        data._doc.content = c;
        res.json(success(data, '添加文章日志成功'));
    } catch (err) { error('添加文章日志失败', err); }
})

router.put('/update', async (req, res) => {
    let { chapterId, title, typeId, content, briefIntroduction } = req.body;
    try {
        let data = await chapter.findByIdAndUpdate(chapterId, { title, updateTime: new Date(), typeId, briefIntroduction });
        let c = await _content.updateOne({ chapterId }, { content });
        data._doc.content = c;
        res.json(success(data, '更新文章成功'));
    } catch (err) { error('更新文章失败', err) }
})

router.delete('/del', async (req, res) => {
    let { chapterId } = req.query;
    try {
        let content = await _content.find({ chapterId });
        let data1 = await _content.findByIdAndDelete(content._id);
        let data2 = await chapter.findByIdAndDelete(chapterId);
        res.json(success({ chapter: data1, content: data2 }, '删除文章日志成功'));
    } catch (err) {
        res.json(error('删除文章日志失败', err));
    }
})

router.get('/random', async (req, res) => {
    const { size } = req.query;
    try {
        const docs = await chapter.aggregate([{ $sample: { size: Number(size) } }])
        // 绑定信息
        for (let doc of docs) {
            let udata = await user.findById(doc.userId);
            let ctype = await type.findById(doc.typeId);
            doc.user = udata;
            doc.type = ctype;
        }
        res.json(success(docs, '获取推荐列表成功'));
    } catch (err) { res.json(error('获取推荐列表失败', err)); }
})

module.exports = router;