document.getElementById('recovery-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Código de recuperação enviado para o seu e-mail.');
});

document.getElementById('continue-button').addEventListener('click', function() {
    alert('Código verificado. Crie sua nova senha.');
});

function voltar() {
    window.history.back();
}
