const user = require('../model/user');
const bcrypt = require('bcrypt');
const errorObject = require('../config/error');
const config = require('../config/error');

module.exports = {
    get: async ctx => {
        await ctx.render('signup.html', {title: '注册'});
    },

    post: async ctx => {
        const body = ctx.request.body;
        const { username, password, email } = body;
        // 密码 hash
        const salt = bcrypt.genSaltSync(config.saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        // 数据库操作
        try {
            const instance = await user.create({ username, password: hash, email });
            // 保存少量信息到 session
            ctx.session.uid = instance.uid.toString();
            ctx.session.username = instance.username;
            ctx.body = {
                code: 0,
                msg: '注册成功'
            };
        } catch (error) {
            if (error.name === 'MongoError' && error.code === 11000 && error.keyValue.email) {
                throw new ctx.app.CustomError(errorObject.code.MONGO_DUPLICATE_KEY, '该邮箱已经被注册');
            } else {
                throw new ctx.app.CustomError(errorObject.code.UNKNOW_ERROR);
            }
        }
    }
}