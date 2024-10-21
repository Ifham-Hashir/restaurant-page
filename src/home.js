const content = document.querySelector("#content");
export default function()
{
  const homeDiv = document.createElement("div");
  homeDiv.style.height = "100vh";
  homeDiv.style.width = "80vw";
  homeDiv.style.background = "rgb(30, 34, 35)";
  homeDiv.classList.add("home");
  content.appendChild(homeDiv);

  const title = document.createElement("h1");
  title.textContent = "RE1GNS RESTAURANT";
  title.style.color = "white";
  homeDiv.appendChild(title);

  const timeDiv = document.createElement("div");
  timeDiv.classList.add("timeDiv");
  timeDiv.style.height = "500px";
  timeDiv.style.width = "500px";
  timeDiv.style.border = "2px solid white";
  homeDiv.appendChild(timeDiv);

  const timeHead = document.createElement("h2");
  timeHead.textContent = "HOURS";
  timeHead.style.color = "white";
  timeDiv.appendChild(timeHead);

  const timeList = document.createElement("ul");
  let items = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm', 'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm'];
  items.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    li.style.padding = "10px";
    timeList.appendChild(li);
});
  timeList.style.padding = "15px";
  timeList.style.color = "white";
  timeList.style.fontSize = "30px";
  timeDiv.appendChild(timeList);
}