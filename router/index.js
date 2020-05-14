const Router = require('@koa/router');
const homeRouter = require('./home');
const loginRouter = require('./login');
const signupRouter = require('./signup');
const postRouter = require('./post');
const detailRouter = require('./detail');
const logoutRouter = require('./logout');

const router = new Router();

// 注册路由
router.use('/', homeRouter.routes(), homeRouter.allowedMethods());
router.use('/login', loginRouter.routes(), loginRouter.allowedMethods());
router.use('/signup', signupRouter.routes(), signupRouter.allowedMethods());
router.use('/post', postRouter.routes(), postRouter.allowedMethods());
router.use('/detail', detailRouter.routes(), detailRouter.allowedMethods());
router.use('/logout', logoutRouter.routes(), logoutRouter.allowedMethods());

module.exports = router;