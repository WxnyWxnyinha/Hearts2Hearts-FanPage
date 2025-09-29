const hamburgerBtn = document.querySelector('.hamburger');
const navMenu = document.getElementById('menu');

hamburgerBtn.addEventListener('click', function() {
    // Alterna a classe 'open' no botão para mudar o ícone (Ex: 3 barras -> X)
    hamburgerBtn.classList.toggle('open');
    
    // Alterna a classe 'open' no menu para mostrá-lo/escondê-lo
    navMenu.classList.toggle('open');
    
    // Melhora a acessibilidade, alternando o atributo 'aria-expanded'
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true' || false;
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
});