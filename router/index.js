const Router = require('@koa/router');
const homeRouter = require('./home');

const router = new Router();

// 注册路由
router.use('/', homeRouter.routes(), homeRouter.allowedMethods());

module.exports = router;