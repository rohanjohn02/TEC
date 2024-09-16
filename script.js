const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector(' .navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};



let slides = document.querySelectorAll('.slide-container');
let index = 0;

//next function
function next(){
    slides[index].classList.remove('aactive');
    index = (index + 1) % slides.length;
    slides[index].classList.add('aactive');
}

//previous function
function prev(){
    slides[index].classList.remove('aactive');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('aactive');
}


