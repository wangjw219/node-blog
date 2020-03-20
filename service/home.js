module.exports = {
    list: async (ctx, next) => {
        return [
            {
                id: 0,
                title: '文章一',
                content: '文章内容文章内容'
            },
            {
                id: 1,
                title: '文章二',
                content: '文章内容文章内容'
            },
        ]
    }
};