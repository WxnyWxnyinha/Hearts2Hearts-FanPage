// Arquivo: script/formulario.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Só executa o código se o formulário e a mensagem existirem
    if (contactForm && successMessage) {
        // Agora, podemos buscar o botão com segurança
        const submitButton = contactForm.querySelector('input[type="submit"]');

        contactForm.addEventListener('submit', function(event) {
            // 1. Impede o comportamento padrão do formulário (recarregar a página)
            event.preventDefault(); 
            
            // 2. Oculta o botão de envio
            submitButton.style.display = 'none';

            // 3. Mostra a mensagem de sucesso
            successMessage.style.display = 'block';
            
            // 4. Limpa todos os campos do formulário
            contactForm.reset();
            
            // 5. Define um temporizador para esconder a mensagem e reexibir o botão
            setTimeout(function() {
                successMessage.style.display = 'none';
                submitButton.style.display = 'block'; 
            }, 3000); // 3 segundos
        });
    }
});