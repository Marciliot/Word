
document.getElementById('recovery-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Um código de recuperação foi enviado para ${email}`);
});
