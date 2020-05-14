module.exports = {
    get: async ctx => {
        ctx.session = null;
        await ctx.redirect('/');
    }
}