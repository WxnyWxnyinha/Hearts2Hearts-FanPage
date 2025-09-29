function toggleFacts(buttonElement) {
    // 1. Encontra o elemento <ul> com a classe 'facts' que está logo após o botão
    const factsList = buttonElement.nextElementSibling;
    
    // 2. Verifica o estado atual do display
    if (factsList.style.display === 'none') {
        // Se estiver escondido, mostra e muda o texto do botão
        factsList.style.display = 'block';
        buttonElement.textContent = 'Clique aqui para esconder os fatos';
    } else {
        // Se estiver visível, esconde e reverte o texto do botão
        factsList.style.display = 'none';
        buttonElement.textContent = 'Clique aqui para mostrar mais fatos de ' + getMemberName(buttonElement);
    }
}

// Função auxiliar para tentar extrair o nome da integrante para a mensagem
function getMemberName(button) {
    const infoDiv = button.closest('.member-info');
    if (infoDiv) {
        // Procura pelo nome artístico da integrante (ex: Jiwoo, Carmen)
        const nameElement = infoDiv.querySelector('strong');
        if (nameElement && nameElement.nextSibling) {
            // Pega o texto após o <strong>Nome Artístico:</strong>
            let text = nameElement.nextSibling.textContent.trim();
            // Remove o parênteses com o hangul, se existir
            const match = text.match(/([^\s]+)/); 
            return match ? match[0] : '';
        }
    }
    return 'Integrantes';
}