import ReactDOM from "react-dom";

import { App } from "./app/App";

// sections
ReactDOM.render(<App />, document.querySelector("[data-container='root']"));

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
  if (event.target === rulesModal) {
    rulesModal.style.display = "none";
  }
};
