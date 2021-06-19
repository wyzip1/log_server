const db = require('./config')();
const { type, user } = require('./model');
init();
async function init() {
    await type.create({ name: '前端' });
    let data = await type.find();
    console.log(data);
}