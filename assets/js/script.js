"use strict";
// Form validation
// Inpu variables
const cardName = document.querySelector("#card-name");
const cardNumber = document.querySelector("#card-number");
const MM = document.querySelector("#mm");
const YY = document.querySelector("#yy");
const cvc = document.querySelector("#cvc");

const cardFrontDefaultNumber = "0000 0000 0000 0000";

// Confirm variable
const confirmBtn = document.querySelector("#confirm-btn");

// Declare name validation function
function nameValidation() {
  const nameLength = cardName.value.length;
  const hasNum = /\d/.test(cardName.value);
  if (nameLength < 3 || hasNum) {
    cardName.classList.add("invalid-input");
    cardName.nextElementSibling.classList.add("visible");
  } else {
    cardName.classList.remove("invalid-input");
    cardName.nextElementSibling.classList.remove("visible");
  }
}
// Add name validation event listener to cardName input
cardName.addEventListener("change", nameValidation);

// number validation function
function numberValidation() {
  const hasNaN = isNaN(cardNumber.value);
  if (hasNaN) {
    cardNumber.classList.add("invalid-input");
    cardNumber.nextElementSibling.classList.add("visible");
  } else {
    cardNumber.classList.remove("invalid-input");
    cardNumber.nextElementSibling.classList.remove("visible");
  }
  numberFormatter();
}

cardNumber.addEventListener("input", numberValidation);

function numberFormatter() {
  const cardFrontNumber = document.querySelector(".card-front .card-number");

  let cardNumberArray = [];
  for (let i = 0; i < cardNumber.value.length; i += 4) {
    cardNumberArray.push(cardNumber.value.substring(i, i + 4));
    let soFar = cardNumberArray.join(" ");
    soFar = soFar.length;
    console.log(soFar);
  }

  const res = cardNumberArray.join(" ");

  if (cardNumber.value.length === 0 ) {
    cardFrontNumber.innerText = cardFrontDefaultNumber;
  } else {
    cardFrontNumber.innerText = res;
  }
}
