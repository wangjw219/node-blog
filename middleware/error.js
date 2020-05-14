const CustomError = require('../helper/error');
const nodeEnv = process.env.NODE_ENV;

module.exports = () => {
    return async (ctx, next) => {
        try {
            await next();
        }
        catch (error) {
            if (error instanceof CustomError) {
                const errInfo = error.getErrorInfo();
                const code = errInfo.code;
                const msg = errInfo.msg;
                ctx.body = {
                    code,
                    msg
                }
            } else {
                if (nodeEnv === 'development') {
                    throw error;
                } else {
                    ctx.body = {
                        code: 5000,
                        msg: '系统繁忙，请重试'
                    }
                }
            }
        }
    }
}