const topoBtn = document.getElementById('scroll-to-top-btn');

// --- Ação 1: Fazer a rolagem para o topo ---
topoBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Rolagem suave
  });
});

// --- Ação 2: Mostrar/Esconder o botão ao rolar a página ---
window.addEventListener('scroll', function() {
  // Mostra o botão após o usuário rolar 300 pixels
  if (window.scrollY > 300) {
    topoBtn.style.display = 'block';
  } else {
    topoBtn.style.display = 'none';
  }
});

// Inicialmente esconde o botão, caso a página carregue no topo
topoBtn.style.display = 'none';