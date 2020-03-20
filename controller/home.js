const homeService = require('../service/home');

module.exports = async (ctx, next) => {
    const list = await homeService.list();
    await ctx.render('home.html', {
        title: '首页',
        list
    });
}