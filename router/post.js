const Router = require('@koa/router');
const postController = require('../controller/post');
const koaBody = require('koa-body');
const checkLogin = require('../middleware/check-login');

const router = new Router();

router.get('/', checkLogin(), postController.get);
router.post('/', checkLogin(), koaBody(), postController.post);

module.exports = router;