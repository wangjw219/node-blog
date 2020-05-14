const Koa = require('koa');
const views = require('koa-views');
const config = require('./config/default');
const path = require('path');
const router = require('./router/index');
const static = require('koa-static');
const CustomError = require('./helper/error');
const errorMiddleware = require('./middleware/error');
const session = require('koa-session');

// 创建应用
const app = new Koa();

// 用以为 session 相关 cookie 生成签名
app.keys = ['hello world', 'node blog'];
app.use(session(app));

// 错误对象挂载
app.CustomError = CustomError;

// 错误统一处理
app.use(errorMiddleware());

// 模板引擎配置
app.use(views(path.resolve(__dirname, 'views'), {
    options: {
        settings: {
            views: path.resolve(__dirname, 'views')
        }
    },
    map: {
        html: 'nunjucks',
    }
}));

// 注册路由
app.use(router.routes());
app.use(router.allowedMethods());

// 配置静态文件
app.use(static(path.resolve(__dirname, 'public')));

// 监听端口
app.listen(config.port);

module.exports = app;