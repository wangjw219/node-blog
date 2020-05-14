(() => {
    var simplemde = new SimpleMDE({element: document.getElementById('post_area')});

    const postButton = document.getElementById('post_button');

    postButton.addEventListener('click', () => {
        const title = document.getElementById('post_title').value;
        const intro = document.getElementById('post_intro').value;
        const content = simplemde.value();

        axios({
            url: '/post',
            method: 'post',
            data: {
                title,
                intro,
                content
            }
        }).then(res => {
            const data = res.data;
            if (data.code === 0) {
                location.href = '/';
            } else {
                alert(data.msg);
            }
        });
    })
})();