function carregarConteudo(url) {
    document.getElementById('corpo').src = url;
}

const Menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

let isOpen = false;

Menu.addEventListener('click', function() {
  isOpen = !isOpen;

  if (isOpen) {
    navMenu.style.left = '0';
  } else {
    navMenu.style.left = '-1000%';
  }
});

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
