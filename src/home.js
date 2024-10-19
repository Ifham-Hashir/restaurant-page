const body = document.querySelector("#content");
export default function () {
  document.addEventListener('mousemove', logKey);
  let angle = 70;
  function logKey(e){
    angle = 40 + ((e.clientX/body.clientWidth)*100)
    console.log(angle);
    body.style.background = "linear-gradient("+angle+"deg,#1c1c1c 0%,black 50%,white 50%,whitesmoke 100%)"
  }
}