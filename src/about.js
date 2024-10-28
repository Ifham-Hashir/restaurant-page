const content = document.querySelector("#content");

export default function()
{
  const aboutDiv = document.createElement("div");
  aboutDiv.style.height = "100vh";
  aboutDiv.style.width = "80vw";
  aboutDiv.style.background = "rgb(30, 34, 35)";
  aboutDiv.classList.add("about");
  content.appendChild(aboutDiv);

  const aboutHead = document.createElement("h1");
  aboutHead.textContent = "ABOUT US";
  aboutHead.style.color = "white";
  aboutHead.style.margin = "50px";
  aboutDiv.appendChild(aboutHead);

  const aboutList = document.createElement("ul");
  let items = ["Phone No: 123-456-789", "Email: reigns123@gmail.com", "Address: New York, Street No.15"];
  items.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    li.style.padding = "10px";
    aboutList.appendChild(li);
  });
  aboutList.style.padding = "15px";
  aboutList.style.color = "white";
  aboutList.style.fontSize = "30px";
  aboutDiv.appendChild(aboutList);
}