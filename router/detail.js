const Router = require('@koa/router');
const detailController = require('../controller/detail');

const router = new Router();

router.get('/:id', detailController.get);

module.exports = router;