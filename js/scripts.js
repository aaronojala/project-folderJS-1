function startScript() {
  console.log("Hello world");
  setBackGroundImg();
}

/* execute Hello World on console and set background image */

function setBackGroundImg() {
  document.body.style.backgroundImage = 'url("img/bg.jpg")';
}

/* setBackgroundImg to specified picture*/

document.addEventListener("DOMContentLoaded", startScript);

/* creates event listener which execute startScript when DOM content loads */

var titleWrapper = document.createElement("div");
titleWrapper.setAttribute("id", "title-wrapper");
document.body.appendChild(titleWrapper);

/* creates new id named title-wrapper and appends it under body */

var h1 = document.createElement("h1");
h1.setAttribute("id", "work");
h1.innerHTML = "work under progress...";
titleWrapper.appendChild(h1);

/* creates a new h1 id = title with text "work in progress" and appends under titleWrapper */

document.getElementById("title-wrapper").style =
  "top: 50%; width: 100%; text-align: center; font-family: impact; position: absolute; text-transform: uppercase;";

document.getElementById("work").style =
  " width: fit-content; margin: auto; background: black; color: white; ";

/* Styles the title wrapper and h1 */
