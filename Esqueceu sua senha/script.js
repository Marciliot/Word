document.getElementById('recovery-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (validateEmail(email)) {
        console.log('Código enviado para:', email);
        alert('Um código foi enviado para seu e-mail!');
        emailInput.value = '';
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
});

document.getElementById('resetForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword === confirmPassword) {
        console.log('Senha redefinida com sucesso!');
        alert('Senha redefinida com sucesso!');
        // Aqui você pode redirecionar o usuário ou realizar outra ação
    } else {
        alert('As senhas não correspondem. Tente novamente.');
    }
});

document.getElementById('continue-button')?.addEventListener('click', function() {
    const codeInputs = document.querySelectorAll('.code-inputs input');
    let code = '';

    codeInputs.forEach(input => {
        code += input.value;
    });

    if (code.length === codeInputs.length) {
        console.log('Código enviado:', code);
        alert('sua nova senha foi criado com sucesso!.');
        // Aqui você pode redirecionar para a página de redefinição de senha
    } else {
        alert('Por favor, insira todos os dígitos do código.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function voltar() {
    window.history.back();
}
