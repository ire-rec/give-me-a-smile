"use strict";
const face = document.querySelector(".face-js");
const happyFaceOption = document.querySelector(".optionHappyFace-js");
const sadFaceOption = document.querySelector(".optionSadFace-js");
const updateBtn = document.querySelector(".updateButton-js");
const selectOneOption = document.querySelector(".select-js");
const main = document.querySelector(".main-js");

const getRandomInt = (max) => {
  let random = Math.floor(Math.random() * max);
  return random;
};
getRandomInt(100);

if (getRandomInt(100) % 2 === 0) {
  main.classList.add("fuego-chileno");
}

if (happyFaceOption) {
  face.innerHTML = `:)`;
}

const handleUpdateClick = (ev) => {
  ev.preventDefault();
  if (selectOneOption === "") {
    face.innerHTML = ``;
  }
  if (selectOneOption !== "") {
    face.innerHTML = selectOneOption.value;
  }
};

updateBtn.addEventListener("click", handleUpdateClick);
