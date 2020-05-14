(() => {
    const signupForm = document.getElementById('signup_form');
    const signupButton = document.getElementById('signup_button');

    signupButton.addEventListener('click', (e) => {
        const fd = new FormData(signupForm);
        const username = fd.get('username');
        const email = fd.get('email');
        const password = fd.get('password');
        if (!username || !email || !password) {
            alert('请填写完整信息');
        } else {
            axios({
                url: '/signup',
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