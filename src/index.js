import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SectionList } from "./section-list/SectionList";
import { Header } from "./header/Header";
import reportWebVitals from "./reportWebVitals";

// sections
ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <SectionList></SectionList>
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

//

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
