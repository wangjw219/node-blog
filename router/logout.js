const Router = require('@koa/router');
const logoutController = require('../controller/logout');

const router = new Router();

router.get('/', logoutController.get);

module.exports = router;