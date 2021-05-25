import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SectionList } from "./section-list/SectionList";
import { Header } from "./header/Header";
import { Bazars } from "./bazars/Bazars";
import { Rules } from "./rules/Rules";
import { Footer } from "./footer/Footer";
import reportWebVitals from "./reportWebVitals";
import { FirebaseProvider } from "./FirebaseProvider";

// sections
ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <Header></Header>
      <SectionList></SectionList>
      <Rules></Rules>
      <Bazars></Bazars>
      <Footer></Footer>
    </FirebaseProvider>
  </React.StrictMode>,
  document.querySelector("[data-container='root']")
);

// contact form
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// vairāk

let episodeImage = document.querySelector(".rubric-image");
let episodeNumber = document.querySelector(".number");
let detailsButton = document.querySelector(".details-button");

detailsButton.addEventListener("click", hideEpisodeContent);

function hideEpisodeContent() {
  episodeImage.classList.toggle("hide");
  episodeNumber.classList.toggle("hide");
  if (detailsButton.classList.containts("hide")) {
    detailsButton.innerHTML = "MAZĀK";
  } else {
    detailsButton.innerHTML = "VAIRĀK";
  }
}

// bazars modal

// let bazarsModal = document.getElementById("bazars-modal");
// let bazarsModalBtn = document.getElementsByClassName("bazars-btn");
// let bazarsModalSpan = document.getElementsByClassName("bazars-close")[0];

// bazarsModalBtn.onclick = function() {
//   bazarsModal.style.display = "block";
// }

// bazarsModalSpan.onclick = function () {
//   bazarsModal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == bazarsModal) {
//     bazarsModal.style.display = "none";
//   }
// };

// rules modal

let rulesModal = document.getElementById("rules-modal");
let rulesModalBtn = document.getElementsByClassName("rules-btn");
let rulesModalSpan = document.getElementsByClassName("rules-close")[0];

rulesModalBtn.onclick = function () {
  rulesModal.style.display = "block";
};

rulesModalSpan.onclick = function () {
  rulesModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == rulesModal) {
    rulesModal.style.display = "none";
  }
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
