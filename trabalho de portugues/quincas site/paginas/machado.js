// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    
    // Seleciona todos os elementos com a classe 'event'
    const events = document.querySelectorAll('.event');

    // Itera sobre os eventos
    events.forEach(function (event, index) {

        // Calcula o ano com base no índice
        const year = 1839 + index;

        // Cria um elemento div para representar a linha do tempo
        const line = document.createElement('div');
        line.className = 'line';  // Adiciona a classe 'line' ao elemento

        // Posiciona a linha horizontalmente com base no ano
        line.style.left = `calc(${(year - 1839) * 100 / (1908 - 1839)}% - 1px)`;
        // A fórmula calcula a porcentagem do ano em relação ao intervalo total de anos

        // Adiciona a linha ao elemento de linha do tempo
        document.querySelector('.timeline').appendChild(line);
    });
});
