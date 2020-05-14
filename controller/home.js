const config = require('../config/default');
const post = require('../model/post');

module.exports = async (ctx, next) => {
    const perpage = 10;
    const page = ctx.query.page || 1;
    const list = await post.getPostList({page, perpage});
    await ctx.render('home.html', {
        title: config.sitename,
        list
    });
}