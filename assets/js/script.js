"use strict";
// Form validation
// Inpu variables
const cardName = document.querySelector("#card-name");
const cardNumber = document.querySelector("#card-number");
const MM = document.querySelector("#mm");
const YY = document.querySelector("#yy");
const cvc = document.querySelector("#cvc");


// Confirm variable
const confirmBtn = document.querySelector("#confirm-btn");

// Declare name validation function
function nameValidation() {
  const nameLength = cardName.value.length;
  if (nameLength < 3) {
    cardName.classList.add("invalid-input");
    cardName.nextElementSibling.classList.add("visible");
  } else {
    cardName.classList.remove("invalid-input");
    cardName.nextElementSibling.classList.remove("visible");
  }
}
// Add name validation event listener to cardName input
cardName.addEventListener("change", nameValidation);

// function 