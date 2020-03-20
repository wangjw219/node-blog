const Router = require('@koa/router');
const homeController = require('../controller/home');

const router = new Router();

router.get('/', homeController);

module.exports = router;