const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/test_node', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('sucessfully');
    } catch (error) {
        console.log('faild');
    }
}

module.exports = { connect }