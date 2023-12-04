document.addEventListener('DOMContentLoaded', function () {
    const events = document.querySelectorAll('.event');

    events.forEach(function (event, index) {
        const year = 1839 + index;
        const line = document.createElement('div');
        line.className = 'line';
        line.style.left = `calc(${(year - 1839) * 100 / (1908 - 1839)}% - 1px)`;
        document.querySelector('.timeline').appendChild(line);
    });
});
