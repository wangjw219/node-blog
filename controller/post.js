const post = require('../model/post');

module.exports = {
    get: async ctx => {
        await ctx.render('post.html', {
            title: '文章编辑'
        });
    },

    post: async ctx => {
        const {title, intro, content} = ctx.request.body;
        const author = ctx.session.uid;

        try {
            await post.create({title, intro, content, author});
            ctx.body = {
                code: 0,
                msg: '创建成功'
            };
        } catch (error) {
            throw new ctx.app.CumstomError();
        }
    }
}