//popup
const modal = document.querySelector('#modal');
const modalOpen = document.querySelector('#modal__open');
const modalClose = document.querySelector('#modal__close');
const input = document.querySelector('.subscribe-input');

modalOpen.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('none');
});

modalClose.addEventListener('click', () => {
    modal.classList.add('none');
});

modal.addEventListener('click', function(){
	modalNode.classList.add('hidden');
});

modal.querySelector('.modal__window').addEventListener('click', function(e){
	e.stopPropagation();
});

//hamburger
const nav = document.querySelector('.nav__list-wrapper');
const menu = document.querySelector('#menu-icon');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open')
});

window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
});
