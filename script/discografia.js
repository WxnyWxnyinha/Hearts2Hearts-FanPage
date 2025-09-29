document.addEventListener('DOMContentLoaded', function() {
    // Confirma que o script está carregando (Verifique no Console F12)
    console.log("Discografia JS: Script carregado e pronto para a interação."); 
    
    // Seleciona todos os botões de toggle de faixas
    const toggleButtons = document.querySelectorAll('.toggle-tracklist-btn');
    
    // Confirma se encontrou os 3 botões (The Chase, STYLE, FOCUS)
    console.log("Discografia JS: Botões encontrados:", toggleButtons.length); 

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Pega o ID do elemento <ul> a ser controlado
            const targetId = this.getAttribute('data-target');
            const tracklist = document.getElementById(targetId);

            if (tracklist) {
                // Alterna a visibilidade (style.display)
                if (tracklist.style.display === 'none' || tracklist.style.display === '') {
                    // MOSTRAR
                    tracklist.style.display = 'block';
                    this.textContent = 'Esconder Faixas';
                } else {
                    // ESCONDER
                    tracklist.style.display = 'none';
                    this.textContent = 'Mostrar Faixas';
                }
            }
        });
    });
});