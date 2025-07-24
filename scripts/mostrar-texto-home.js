const hoverArea = document.querySelectorAll('.hover-area');
const textoAparece = document.querySelectorAll('.hidden-text');

// Adiciona os eventos de mouse
hoverArea.forEach((area, index) => {
  area.addEventListener('mouseover', () => {
    textoAparece[index].style.display = 'block';
  });

  area.addEventListener('mouseout', () => {
    textoAparece[index].style.display = 'none';
  });
});
