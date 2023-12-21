"use strict";
const h1 = document.querySelector(".h1-js");
const happyFaceOption = document.querySelector(".optionHappyFace-js");
const sadFaceOption = document.querySelector(".optionSadFace-js");
const updateBtn = document.querySelector(".updateButton-js");
const selectOneOption = document.querySelector(".select-js");
const bodyp = document.querySelector(".body-js");

const getRandomInt = (max) => {
  let random = Math.floor(Math.random() * max);
  return random;
};
getRandomInt(100);

if (getRandomInt(100) % 2 === 0) {
  bodyp.classList.add("fuego-chileno");
}

if (happyFaceOption) {
  h1.innerHTML = `:)`;
}
const handleUpdateClick = (ev) => {
  ev.preventDefault();
  if (selectOneOption === "") {
    h1.innerHTML = ``;
  }

  if (selectOneOption !== "") {
    h1.innerHTML = selectOneOption.value;
  }
};

updateBtn.addEventListener("click", handleUpdateClick);
