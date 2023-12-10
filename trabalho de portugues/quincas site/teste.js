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

// Codigo para fechar menu quando clicado em um link ================================================
// Função para fechar o menu
function fecharMenu() {
  isOpen = false;
  navMenu.style.left = '-1000%';
}

// Adiciona manipuladores de eventos para cada link dentro do menu
const links = document.querySelectorAll('.nav-menu');
links.forEach(function(link) {
  link.addEventListener('click', function() {
    fecharMenu();
  });
});
//====================================================================================================



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



document.addEventListener("DOMContentLoaded", function () {
  var personagensNavItem = document.getElementById("personagens");
  var submenu = personagensNavItem.querySelector(".sub-menu");

  function toggleSubMenu() {
      submenu.classList.toggle("active");
  }

  function closeSubMenuOutsideClick(event) {
      if (!personagensNavItem.contains(event.target) && !submenu.contains(event.target)) {
          submenu.classList.remove("active");
          document.removeEventListener("click", closeSubMenuOutsideClick);
      }
  }

  personagensNavItem.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleSubMenu();

      if (submenu.classList.contains("active")) {
          document.addEventListener("click", closeSubMenuOutsideClick);
      } else {
          document.removeEventListener("click", closeSubMenuOutsideClick);
      }
  });
});



