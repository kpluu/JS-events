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

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

// Fonctionnalité 5 : 
//1. Find and store the element we want to listen to events on.
var doubleClickerNavbar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
console.log(doubleClickerNavbar)

var stylesheetLink = document.querySelector("link")
console.log(stylesheetLink);

var bootstrapLink = stylesheetLink.href
console.log(bootstrapLink);

// 2. Define the function that will respond to the event.`

var bootstrap_hidden = true;
var onDoubleClick = function () {
    if (bootstrap_hidden === true) {
        stylesheetLink.href = "#"
      } else {
        stylesheetLink.href = bootstrapLink
    }
}
// 3. Add the event listener for the element and function
doubleClickerNavbar.addEventListener("dblclick", onDoubleClick);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

// Fonctionnalité 6 : 
//1. Find and store the element we want to listen to events on.
var cardOne = document.getElementsByClassName("col-md-4")[0];
var viewButton = document.getElementsByClassName("btn btn-sm btn-success")[0];

console.log(document.querySelectorAll("col-md-4").length);

// 2. Define the function that will respond to the event.

let cards = document.querySelectorAll("col-md-4")

for (let i = 0; i < cards.length; i++) {
    cards[i].hoverView
}

var hoverView = function (){
    // When hover on view button, make the text disappear 

    var cardContent = document.getElementsByClassName("card-text")[0];
    console.log(cardContent)

    var cardText = cardContent.textContent;
    console.log(cardText)

    var cardContent = document.getElementsByClassName("card-text")[0];
        if (cardContent.innerHTML === cardText) {
        cardContent.innerHTML = '' ;
        } else {
        cardContent.innerHTML = cardText ;
    }

    // When hover on view button, reduce the image by 20%

    var cardImage = document.getElementsByClassName("card-img-top")[0];
        if (cardImage.style.width === "20%") {
        cardImage.style.width = "100%";
        }else {
        cardImage.style.width = "20%" ;
    }
}

// 3. Add the event listener for the element and function

viewButton.addEventListener("mouseover", hoverView);