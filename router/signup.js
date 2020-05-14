const Router = require('@koa/router');
const koaBody = require('koa-body');
const signupController = require('../controller/signup');

const router = new Router();

router.get('/', signupController.get);
router.post('/', koaBody({multipart: true}), signupController.post);

module.exports = router;