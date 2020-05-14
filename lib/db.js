const mongoose = require('mongoose');
const config = require('../config/default');

mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('open', () => {
    console.log('db connected!');
});

db.on('error', () => {
    console.error('db connection failed!');
});

module.exports = mongoose;