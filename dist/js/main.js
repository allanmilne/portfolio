// Select DOM Items
const menuBtn = document.querySelector(".menu-btn"); // selects menu-btn class from DOM and saves to menuBTN variable
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItem = document.querySelectorAll(".nav-item"); // queryselectorAll pulls all eleents that match and put them into a node list which is similar to an array

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu); // adds event, when menu button clicked runs toggleMenu() function

function toggleMenu() {
  if (!showMenu) {
    // checks state of showMenu. if menu overlay is not shown then
    menuBtn.classList.add("close"); //
    menu.classList.add("show"); //
    menuNav.classList.add("show"); //
    menuBranding.classList.add("show"); //
    navItem.forEach(item => item.classList.add("show")); // forEach = high order array method

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close"); //
    menu.classList.remove("show"); //
    menuNav.classList.remove("show"); //
    menuBranding.classList.remove("show"); //
    navItem.forEach(item => item.classList.remove("show")); // forEach = high order array method

    // Set Menu State
    showMenu = false;
  }
}
