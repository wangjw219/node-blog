(() => {
    const loginForm = document.getElementById('login_form');
    const loginButton = document.getElementById('login_button');

    loginButton.addEventListener('click', (e) => {
        const fd = new FormData(loginForm);
        const email = fd.get('email');
        const password = fd.get('password');
        if (!email || !password) {
            alert('请填写完整信息');
        } else {
            axios({
                url: '/login',
                method: 'post',
                data: fd,
            }).then(res => {
                const data = res.data;
                if (data.code === 0) {
                    location.href = '/';
                } else {
                    alert(data.msg);
                }
            });
        }
        e.preventDefault();
    });
})();