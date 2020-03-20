const Koa = require('koa');
const views = require('koa-views');
const config = require('./config/default');
const path = require('path');
const router = require('./router/index');

// 创建应用
const app = new Koa();

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

// 监听端口
app.listen(config.port);

module.exports = app;