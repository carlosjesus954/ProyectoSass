// Variables

const btnBurguer = document.querySelector('.btns__burguer')
const btnClose = document.querySelector('.btns__close')
const nav = document.querySelector('.header__nav')
const navElements = document.querySelectorAll('.nav__li')

const galeriaImg = document.querySelectorAll('.galeria__img')
const galeria = document.querySelector('.galeria__container')
const galeriaMuestra = document.querySelector('.galeria__muestra')
const galeriaClose = document.querySelector('.galeria__close')

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
navElements.forEach((li) => {
    li.addEventListener('click',()=>{
        nav.classList.remove('activo')
        btnClose.classList.add('hidden')
        btnBurguer.classList.remove('hidden')
    })
});

galeriaImg.forEach((imagenSeleccionada) => {
    imagenSeleccionada.addEventListener('click', ()=>{
        console.log(imagenSeleccionada);
        let imagenShow = imagenSeleccionada;
        imagenShow.classList.add('galeria__seleccionado')
        galeriaMuestra.insertAdjacentElement("afterbegin", imagenShow)
        galeriaMuestra.classList.add('activo')
        
        galeriaClose.addEventListener("click", ()=>{
            imagenShow.classList.remove('galeria__seleccionado')
            galeria.appendChild(imagenShow)
            galeriaMuestra.classList.remove('activo')
        })
    })
    
});
// Eventos

btnBurguer.addEventListener('click', abrirMenu)
btnClose.addEventListener('click', cerrarMenu)
