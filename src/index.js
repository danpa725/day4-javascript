// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

const header = document.createElement("h1");
header.innerText = "Hellow";
header.style.color = "white";
body.append(header);

const COLORS = ["#176FA6", "#35F2AD", "#F25749", "#967ECB", "#262626"];

const getCurrentBodyWidth = () => {
  const innerWidth = window.innerWidth;
  if (innerWidth >= 0 && innerWidth <= 750) {
    header.innerText = "This is";
    body.style.background = COLORS[0];
  } else if (innerWidth > 750 && innerWidth <= 1000) {
    header.style.fontSize = `${innerWidth / 2.5}%`;
    header.innerText = "Nomad Coder";
    body.style.background = COLORS[1];
  } else if (innerWidth > 1000 && innerWidth <= 1250) {
    header.style.fontSize = `${innerWidth / 2.5}%`;
    header.innerText = "Day 4";
    body.style.background = COLORS[2];
  } else if (innerWidth > 1250 && innerWidth <= 1500) {
    header.style.fontSize = `${innerWidth / 2.5}%`;
    header.innerText = "Assignment";
    body.style.background = COLORS[3];
  } else {
    header.style.fontSize = `${innerWidth / 2.5}%`;
    header.innerText = "Awesome!";
    body.style.background = COLORS[4];
  }
};

window.addEventListener("resize", getCurrentBodyWidth);
