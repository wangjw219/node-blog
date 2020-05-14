const postModel = require('../model/post');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

module.exports = {
    get: async ctx => {
        const id = ctx.params.id;
        const post = await postModel.getOnePost({id});
        const detail = {
            title: post.title,
            content: md.render(post.content)
        };
        await ctx.render('detail.html', {
            detail
        });
    }
};