document.addEventListener('DOMContentLoaded', main);

var contador = 1;

function main() {
    var menuBar = document.querySelector('.menu_bar');
    var nav = document.querySelector('.navbar');

    menuBar.addEventListener('click', function () {
        if (contador === 1) {
            nav.style.display = 'block';
            contador = 0;
        } else {
            nav.style.display = 'none';
            contador = 1;
        }
    });
}
