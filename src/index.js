import "./style.css";
import home from "./home";
import menu from "./menu";
import about from "./about";
console.log("Hi!");
home();
const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector(".homeButton");
homeBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  home();
});

const menuBtn = document.querySelector(".menuButton");
menuBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  menu();
});

const aboutBtn = document.querySelector(".aboutButton");
aboutBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  about();
});