import "./style.css";
import home from "./home";
console.log("Hi!");
home();
const homeBtn = document.querySelector(".homeButton");
homeBtn.addEventListener("click", () => {
  if(document.querySelector(".home") !== null){
    document.querySelector(".home").remove();
  }
  home();
});
