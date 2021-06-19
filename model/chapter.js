const mongoose = require('mongoose');

let chapterSchema = mongoose.Schema({
    title: String,
    createTime: { type: Date, default: new Date() },
    updateTime: Date,
    userId: String,
    typeId: String
});

let chapter = mongoose.model('chapter', chapterSchema, 'chapter');
module.exports = chapter;