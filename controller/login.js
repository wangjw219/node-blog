const config = require('../config/default');
const errorObject = require('../config/error');
const user = require('../model/user');
const bcrypt = require('bcrypt');

module.exports = {
    get: async ctx => {
        await ctx.render('login.html', {
            title: '登录'
        });
    },

    post: async ctx => {
        const body = ctx.request.body;
        const { email, password } = body;
        // 密码 hash
        const salt = bcrypt.genSaltSync(config.saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const instance = await user.findOne({ email });
        // 用户不存在
        if (!instance) {
            throw new ctx.app.CustomError(errorObject.code.USER_NOT_EXIST);
        }
        // 用户名与密码对不上
        if (bcrypt.compareSync(password, hash)) {
            // 保存少量信息到 session
            ctx.session.uid = instance.uid.toString();
            ctx.session.username = instance.username;
            ctx.body = {
                code: 0,
                msg: '登录成功'
            };
        } else {
            throw new ctx.app.CustomError(errorObject.code.USER_PASSWORD_WRONG);
        }
    }
};