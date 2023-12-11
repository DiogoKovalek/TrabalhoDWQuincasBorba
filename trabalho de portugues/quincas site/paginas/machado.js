document.addEventListener("DOMContentLoaded", function () {
    var modal = document.querySelector(".modal");
    var modalText = document.getElementById("modal-text");

    // Adiciona evento de clique aos pontos
    var dots = document.querySelectorAll(".dot");
    dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
            var year = this.getAttribute("data-year");
            var content = getContentByYear(year);
            showModal(content);
        });
    });

    // Adiciona evento de clique nos anos
    var years = document.querySelectorAll(".year");
    years.forEach(function (year) {
        year.addEventListener("click", function () {
            var content = getContentByYear(this.getAttribute("data-year"));
            showModal(content);
        });
    });

    // Adiciona evento de clique aos pontos
    var points = document.querySelectorAll(".timeline .event");
    points.forEach(function (point) {
        point.addEventListener("click", function () {
            var year = this.getAttribute("data-year");
            var content = getContentByYear(year);
            showModal(content);
        });
    });

    // Adiciona evento de clique nos anos
    var years = document.querySelectorAll(".timeline-dots");
    years.forEach(function (year) {
        year.addEventListener("click", function () {
            var content = getContentByYear(this.innerText);
            showModal(content);
        });
    });

    // Fecha a caixa/modal quando clicar no botão de fechar
    var closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function () {
        closeModal();
    });

    // Função para mostrar a caixa/modal
    function showModal(content) {
        modalText.innerHTML = content;
        modal.style.display = "flex";
        document.getElementById("modal-text").innerHTML = content;
        document.querySelector(".modal").style.display = "flex";
    }

    // Função para fechar a caixa/modal
    function closeModal() {
        modal.style.display = "none";
        document.querySelector(".modal").style.display = "none";
    }
    
    // Função para obter o conteúdo com base no ano
    function getContentByYear(year) {
        // Implemente sua lógica para obter o conteúdo com base no ano
        // Exemplo: return "Texto correspondente ao ano " + year;
        return "Texto correspondente ao ano " + year;
    }

    function getContentByYear(year) {
        // Encontrar o elemento correspondente ao ano clicado
        var yearContentElement = document.querySelector('.event[data-year="' + year + '"] .year-content');
    
        // Obter o texto dentro do elemento
        var content = yearContentElement ? yearContentElement.textContent : '';
    
        return content.trim(); // Remover espaços extras
    }
    
});
