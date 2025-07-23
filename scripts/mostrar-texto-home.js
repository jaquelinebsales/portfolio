const hoverArea = document.querySelector('.hover-area');
const textoAparece = document.getElementById('texto-aparece');

// Adiciona os eventos de mouse
hoverArea.addEventListener('mouseover', function() {
  textoAparece.style.display = 'block';
});

hoverArea.addEventListener('mouseout', function() {
  textoAparece.style.display = 'none';
});