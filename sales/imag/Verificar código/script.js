document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code-inputs input');
    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
    });

    document.getElementById('continue-button').addEventListener('click', () => {
        let code = '';
        inputs.forEach(input => {
            code += input.value;
        });
        alert(`Código inserido: ${code}`);
    });
});
