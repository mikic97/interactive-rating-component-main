"use strict";

const submintBtn = document.querySelector(".submit");
const thankYou = document.querySelector(".thank_you");
const mainCard = document.querySelector(".main_content");
const rateBtn = document.querySelectorAll(".btn");
const rateNumber = document.querySelector(".rate_number");
submintBtn.addEventListener("click", function () {
  thankYou.classList.remove("hidden");
  mainCard.style.display = "none";
});

rateBtn.forEach((rbtn) => {
  rbtn.addEventListener("click", function () {
    console.log(rbtn.innerHTML);
    rateNumber.textContent = rbtn.innerHTML;
  });
});
