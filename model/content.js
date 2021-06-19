const mongoose = require('mongoose');

let contentSchema = mongoose.Schema({
    chapterId: String,
    content: String
});

let content = mongoose.model('content', contentSchema, 'content');

module.exports = content;