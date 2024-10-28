const content = document.querySelector("#content");

export default function()
{
  const menuDiv = document.createElement("div");
  menuDiv.style.height = "100vh";
  menuDiv.style.width = "80vw";
  menuDiv.style.background = "rgb(30, 34, 35)";
  menuDiv.classList.add("menu");
  content.appendChild(menuDiv);
}