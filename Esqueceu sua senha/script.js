document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Código enviado para o seu e-mail!');
    // Aqui você pode adicionar a lógica para enviar o código por e-mail
    window.location.href = 'VerificarCodigo.html'; // Redireciona para a página de verificação
});

document.getElementById('verify-code-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Código verificado com sucesso!');
    // Aqui você pode adicionar a lógica para verificar o código
    window.location.href = 'NovaSenha.html'; // Redireciona para a página de nova senha
});

document.getElementById('new-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword === confirmPassword) {
        alert('Senha alterada com sucesso!');
        // Aqui você pode adicionar a lógica para alterar a senha
    } else {
        alert('As senhas não coincidem!');
    }
});
