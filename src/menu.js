const content = document.querySelector("#content");

export default function()
{
  const menuDiv = document.createElement("div");
  menuDiv.style.height = "100vh";
  menuDiv.style.width = "80vw";
  menuDiv.style.background = "rgb(30, 34, 35)";
  menuDiv.classList.add("menu");
  content.appendChild(menuDiv);

  const menuHead = document.createElement("h1");
  menuHead.textContent = "MENU";
  menuHead.style.color = "white";
  menuHead.style.margin = "50px";
  menuDiv.appendChild(menuHead);

  const menuList = document.createElement("ul");
  let items = [ "Buttermilk Pancakes - $15.99",
    "Diner Double - $13.99",
    "Egg Attack - $12.99",
    "Oreo Dream - $18.99",
    "Bacon Overflow - $8.99",
    "American Classic - $12.99",
    "Quarantine Buddy - $16.99",
    "Country Delight - $10.99"];
  items.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    li.style.padding = "10px";
    menuList.appendChild(li);
  });
  menuList.style.padding = "15px";
  menuList.style.color = "white";
  menuList.style.fontSize = "30px";
  menuDiv.appendChild(menuList);
}