const menu = document.querySelector('#mobile-menu');
const menuLinks =document.querySelector('.navbar__menu');
const nav_logo = document.querySelector("#navbar__logo");

// display mobile menue
const mobile_menu = ()=> {
     menu.classList.toggle('is-active')
     menuLinks.classList.toggle('active')
}


menu.addEventListener('click', mobile_menu);

// fun starts now ***************


// show active menu

const highlight_menu= () =>{
     const elemnt = document.querySelector(".highlight");
     const homeMenu = document.querySelector("#home-page");
     const aboutMenu = document.querySelector("#about-page");
     const serviceMenu = document.querySelector("#services-page");

     let scrollpos = window.scrollY
     console.log(scrollpos)

     // adds highlight class to the menu items

     if(window.innerWidth > 960 && scrollpos < 600 ){
          homeMenu.classList.add('highlight');
          aboutMenu.classList.remove("highlight");
          return
     }
     else if(window.innerWidth > 960 && scrollpos < 1400){
          aboutMenu.classList.add('highlight');
          homeMenu.classList.remove('highlight');
          serviceMenu.classList.remove("highlight");
          return
     }
     else if(window.innerWidth > 960 && scrollpos < 2345){
          serviceMenu.classList.add("highlight");
          aboutMenu.classList.remove('highlight');
          return
     }

     if(( elemnt && window.innerWidth > 960 && scrollpos < 600 ) ||  elemnt){
          elemnt.classList.remove("highlight");
     }
};

window.addEventListener('scroll', highlight_menu)
window.addEventListener('click', highlight_menu)


// close hamburger on click on menu item

const hideMobileMenu = () => {
     const menuBars = document.querySelector('.is-active');
     if (window.innerWidth < 768 && menuBars){
          menu.classList.toggle('is-active');
          menuLinks.classList.remove('active');
     }
};
// window.innerWidth < 768 &&
menuLinks.addEventListener('click', hideMobileMenu);
nav_logo.addEventListener('click', hideMobileMenu);
