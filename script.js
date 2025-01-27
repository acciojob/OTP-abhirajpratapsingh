//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const codeInputs = document.querySelectorAll('.code');

    codeInputs.forEach((input, index) => {
        input.addEventListener('input', function(e) {
            if (e.target.value.length === 1 && index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && index > 0 && !input.value) {
                codeInputs[index - 1].focus();
            }
        });
    });
});
