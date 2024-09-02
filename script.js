document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword === confirmPassword) {
        alert('Senha redefinida com sucesso!');
    } else {
        alert('As senhas não coincidem. Tente novamente.');
    }
});

function voltar() {
    window.history.back();
}
