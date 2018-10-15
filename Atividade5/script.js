let menu = document.querySelector(".menu");
let botMenu = document.querySelector(".menu-bot");
let conteudo = document.querySelector(".conteudo");
let menuOn = 0;

botMenu.addEventListener("click", ()=>{
    if (menuOn == 0) {
        menu.classList.add("menu-visivel1");
        conteudo.classList.add("menu-visivel2");
        menuOn = 1;
    } else {
        menu.classList.remove("menu-visivel1");
        conteudo.classList.remove("menu-visivel2");
        menuOn = 0;
    }
})

let tit1 = document.querySelectorAll(".tit1");
let p1 = document.querySelectorAll('.p1');

tit1[0].addEventListener("click", ()=>{
    if (p1[0].classList.contains('aberto')) {
        p1[0].classList.remove('aberto');
    } else {
        p1[0].classList.add('aberto');
    }
})

tit1[1].addEventListener("click", ()=>{
    if (p1[1].classList.contains('aberto')) {
        p1[1].classList.remove('aberto');
    } else {
        p1[1].classList.add('aberto');
    }
})