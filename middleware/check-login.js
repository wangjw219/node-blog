module.exports = () => {
    return async (ctx, next) => {
        if (ctx.session.uid) {
            await next();
        } else {
            ctx.redirect('/login');
        }
    }
}