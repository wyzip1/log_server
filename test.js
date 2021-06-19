const db = require('./config')();
const { type, user } = require('./model');
init();
async function init() {
    let data = await user.findOne({ username: '2362086452', password: 'ylhm4523' });
    console.log(data);
}