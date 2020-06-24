//Rolagem da página pelo botão
const $active = document.querySelectorAll('.active')[0];

const $intLink = document.querySelectorAll('.int-link a');
$intLink.forEach(function (cur) {
    cur.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.scrollTo({
            top: document.querySelector(cur.getAttribute('href')).offsetTop - $active.offsetHeight,
            left: 0,
            behavior: 'smooth'
        });
    }, false);
});