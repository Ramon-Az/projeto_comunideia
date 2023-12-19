document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');
    let user = document.getElementById('user');
    let password = document.getElementById('password');

    user.addEventListener('input', validateFields);
    password.addEventListener('input', validateFields);

    user.addEventListener('focus', function () {
        user.classList.add('active');
    });
    user.addEventListener('blur', function () {
        user.classList.remove('active');
    });

    password.addEventListener('focus', function () {
        password.classList.add('active');
    });
    password.addEventListener('blur', function () {
        password.classList.remove('active');
    });

    form.addEventListener('submit', function (e) {
        let userValue = user.value.trim();
        let passwordValue = password.value.trim();

        if (userValue === '' || passwordValue === '') {
            alert('Por favor, preencha ambos os campos de usuário e senha.');
            e.preventDefault(); 
        } else {
            user.classList.add('correct');
            password.classList.add('correct');
        }
    });

    function validateFields() {
        let userValue = user.value.trim();
        let passwordValue = password.value.trim();

        
        user.classList.remove('correct', 'error');
        password.classList.remove('correct', 'error');

        if (user.matches(':focus')) {
            user.classList.add('active');
        } else {
            user.classList.remove('active');
        }

        if (password.matches(':focus')) {
            password.classList.add('active');
        } else {
            password.classList.remove('active');
        }

        if (userValue !== '' && user.matches(':focus')) {
            user.classList.add('correct');
        } else if (userValue === '' && user.matches(':focus')) {
            user.classList.add('error');
        }

        if (passwordValue !== '' && password.matches(':focus')) {
            password.classList.add('correct');
        } else if (passwordValue === '' && password.matches(':focus')) {
            password.classList.add('error');
        }
    }
});
