// Variables

const btnBurguer = document.querySelector('.btns__burguer')
const btnClose = document.querySelector('.btns__close')
const nav = document.querySelector('.header__nav')
// funciones

function abrirMenu(){
    nav.classList.add('activo')
    btnClose.classList.remove('hidden')
    btnBurguer.classList.add('hidden')
}
function cerrarMenu(){
    nav.classList.remove('activo')
    btnClose.classList.add('hidden')
    btnBurguer.classList.remove('hidden')
}
// Eventos

btnBurguer.addEventListener('click', abrirMenu)
btnClose.addEventListener('click', cerrarMenu)