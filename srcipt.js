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

document.cookie = "username=John Doe; expires=Tue, 19 Jan 2008 03:14:07 GMT;";
document.cookie = "age = 20"

// alert(document.cookie)

// cookie_remove = document.getElementById("cookie_remove_btn")
// cookie_remove.addEventListener("click", deleteAllCookies)


// function deleteAllCookies() {
//      var cookies = document.cookie.split(";");
 
//      for (var i = 0; i < cookies.length; i++) {
//          var cookie = cookies[i];
//          var eqPos = cookie.indexOf("=");
//          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
//      }
//  }

// deleteAllCookies()

// sessionStorage. clear();

// let removing = browser.cookies.remove(
//      username               // object
//    )
   
// alert(document.cookie.delete)

$(function() {
     var COOKIE_NAME = 'test_cookie';
     var options = { path: '/', expires: 10 };
     $.cookie(COOKIE_NAME, 'test', options); // sets the cookie
     console.log( $.cookie( COOKIE_NAME)); // check the value // returns test
     $.cookie(COOKIE_NAME, null, options);   // deletes the cookie
     console.log( $.cookie( COOKIE_NAME)); // check the value // returns null
 });
 