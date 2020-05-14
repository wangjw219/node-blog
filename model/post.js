const mongoose = require('../lib/db');
const Schema = mongoose.Schema;

// 定义 Schema
const postSchema = new Schema({
    title: { type: String, required: true },
    intro: { type: String, required: true },
    content: { type: String, required: true },
    updatedAt: { type: Date, required: false },
    author: { type: Schema.Types.ObjectId, required: true }
});
postSchema.index({ author: 1, _id: -1 });

// 定义 Model
const Post = mongoose.model('Post', postSchema);

module.exports = {
    create({ title, intro, content, author, updatedAt }) {
        return new Promise((resolve, reject) => {
            Post.create({ title, intro, content, updatedAt, author }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },

    getPostList({ page, perpage }) {
        return new Promise((resolve, reject) => {
            Post.find({}).skip((page - 1) * perpage).limit(perpage).sort({ '_id': -1 }).exec((err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },

    getOnePost({id}) {
        return new Promise((resolve, reject) => {
            Post.findById(id, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}