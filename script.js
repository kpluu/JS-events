console.log("coucou depuis la console");


// Fonctionnalité 1 et 1bis

//1. Find and store the element we want to listen to events on.
var clickerFooter = document.getElementsByTagName("footer")[0];

// 2. Define the function that will respond to the event.
var clickerCount = 0;

var onFooterClick = function() {
    console.log("clique");
    clickerCount ++;
    console.log(`Clic numéro : ${clickerCount}.`);
}
// 3. Add the event listener for the element and function
clickerFooter.addEventListener("click", onFooterClick);

// Fonctionnalité 2 : 
//1. Find and store the element we want to listen to events on.
var burger = document.getElementsByClassName("navbar-toggler")[0];

// 2. Define the function that will respond to the event.
var onBurgerClick = function () {
    var menuContent = document.getElementById("navbarHeader");
    menuContent.classList.toggle("collapse");
}
// 3. Add the event listener for the element and function
burger.addEventListener("click", onBurgerClick);
