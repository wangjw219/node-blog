const mongoose = require('../lib/db');
const Schema = mongoose.Schema;

// 定义 Schema
const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    uid: { type: mongoose.ObjectId, required: true }
});
userSchema.index({ email: 1 });

// 定义 Model
const User = mongoose.model('User', userSchema);

module.exports = {
    create({ username, password, email }) {
        return new Promise((resolve, reject) => {
            User.create({ username, password, email, uid: new mongoose.Types.ObjectId() }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },

    findOne({ email }) {
        return new Promise((resolve, reject) => {
            User.findOne({ email }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
};