const menu = document.querySelector('#mobile-menu');
const menuLinks =document.querySelector('.navbar__menu');


// display mobile menue
const mobile_menu = ()=> {
     menu.classList.toggle('is-active')
     menuLinks.classList.toggle('active')
}


menu.addEventListener('click', mobile_menu);