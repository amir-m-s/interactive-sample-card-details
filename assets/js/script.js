"use strict";
// Form validation
// Input variables
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
function numberValidation(e) {
  const hasNaN = isNaN(e.target.value);
  if (e.target.getAttribute("id") === "mm" && hasNaN) {
    e.target.classList.add("invalid-input");
    e.target.nextElementSibling.nextElementSibling.classList.add("visible");
  } else if (hasNaN) {
    e.target.classList.add("invalid-input");
    e.target.nextElementSibling.classList.add("visible");
  } else {
    e.target.classList.remove("invalid-input");
    e.target.nextElementSibling.classList.remove("visible");
  }
  numberFormatter();
}

cardNumber.addEventListener("input", numberValidation);

// Card number formatter for display on card front
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

  if (cardNumber.value.length === 0) {
    cardFrontNumber.innerText = cardFrontDefaultNumber;
  } else {
    cardFrontNumber.innerText = res;
  }
}

// Other values display on card front and rear
function cardDisplay(e) {
  const targetId = e.target.getAttribute("id");
  if (targetId === "card-name")
    document.querySelector(".card-info .card-name-display").innerText =
      e.target.value;
  if (targetId === "mm")
    document.querySelector(".card-info .month-display").innerText =
      e.target.value;
  if (targetId === "yy")
    document.querySelector(".card-info .year-display").innerText =
      e.target.value;
  if (targetId === "cvc")
    document.querySelector(".card-rear .cvc-display").innerText =
      e.target.value;
}

// Set event listeners to validate

MM.addEventListener("change", numberValidation);
YY.addEventListener("change", numberValidation);
cvc.addEventListener("change", numberValidation);

// Set event listeners to display on cards
cardName.addEventListener("input", cardDisplay);
MM.addEventListener("input", cardDisplay);
YY.addEventListener("input", cardDisplay);
cvc.addEventListener("input", cardDisplay);
