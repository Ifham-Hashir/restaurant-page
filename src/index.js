import "./style.css";
import home from "./home";
import menu from "./menu";
console.log("Hi!");
home();

const homeBtn = document.querySelector(".homeButton");
homeBtn.addEventListener("click", () => {
  home();
});

const menuBtn = document.querySelector(".menuButton");
menuBtn.addEventListener("click", () => {
    menu();
});