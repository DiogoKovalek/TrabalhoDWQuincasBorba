const hamburgerMenu = document.querySelector('.hamburgue');
const navMenu = document.querySelector('.nav-menu');

let isOpen = false;

hamburgerMenu.addEventListener('click', function() {
  isOpen = !isOpen;

  if (isOpen) {
    navMenu.style.left = '0';
  } else {
    navMenu.style.left = '-1000%';
  }
});




function carregarConteudo(url) {
    document.getElementById('corpo').src = url;
}


document.getElementById('personagens').addEventListener('click', function() {
  var subMenu = document.getElementById('sub-menu-personagens');
  subMenu.classList.toggle('show');
});

// Fechar o submenu se clicar fora dele
document.addEventListener('click', function(e) {
  if (!e.target.closest('#personagens')) {
      var subMenu = document.getElementById('sub-menu-personagens');
      subMenu.classList.remove('show');
  }
});


