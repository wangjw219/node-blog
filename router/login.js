const Router = require('@koa/router');
const koaBody = require('koa-body');
const loginController = require('../controller/login');

const router = new Router();

router.get('/', loginController.get);
router.post('/', koaBody({multipart: true}), loginController.post);

module.exports = router;