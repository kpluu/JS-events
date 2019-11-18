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
    var burgerContent = document.getElementById("navbarHeader");
    burgerContent.classList.toggle("collapse");
}
// 3. Add the event listener for the element and function
burger.addEventListener("click", onBurgerClick);

// Fonctionnalité 3 : 
//1. Find and store the element we want to listen to events on.
var cardOne = document.getElementsByClassName("col-md-4")[0];
var editButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

// 2. Define the function that will respond to the event.
var onEditClick = function () {
    var cardContent = document.getElementsByClassName("card-text")[0];
    cardContent.style.color = "red" ;
}
// 3. Add the event listener for the element and function
editButton.addEventListener("click", onEditClick);

// Fonctionnalité 4 : 
//1. Find and store the element we want to listen to events on.
var cardTwo = document.getElementsByClassName("col-md-4")[1];
console.log(cardTwo)
var editButtonTwo = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
console.log(editButtonTwo)

// 2. Define the function that will respond to the event.
var onEditClick = function () {
    var secondCard = document.getElementsByClassName("card-text")[1];
    if (secondCard.style.color === 'green'){
    secondCard.style.color = '' ;
    }else {
    secondCard.style.color = 'green' ;
    }
}
   
// 3. Add the event listener for the element and function
editButtonTwo.addEventListener("click", onEditClick);

// Fonctionnalité 5 : 
//1. Find and store the element we want to listen to events on.
var doubleClickerNavbar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
console.log(doubleClickerNavbar)

// 2. Define the function that will respond to the event.`
var style = document.styleSheets[0]
console.log(style)

var onDoubleClick = function () {
    if (document.styleSheets[0].disabled = true) {
        document.styleSheets[0].disabled = '';
      } else {
        document.styleSheets[0].disabled = true;
      }
}

// 3. Add the event listener for the element and function
doubleClickerNavbar.addEventListener("dblclick", onDoubleClick);
