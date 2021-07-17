var text = document.querySelector(".text");
var bird1 = document.getElementById("bird1");
var bird2 = document.getElementById("bird2");
var btn = document.querySelector(".btn");
var forest = document.getElementById("forest");
var rocks = document.getElementById("rocks");
var water = document.getElementById("water");
console.log(text);
window.addEventListener("scroll", function (e) {
  let value = window.scrollY;

  text.style.top = 50 + value * -0.5 + "%";
  bird1.style.top = value * -0.5 + "px";
  bird1.style.left = value * 2 + "px";

  bird2.style.top = value * -0.1 + "px";
  bird2.style.left = value * -2 + "px";

  btn.style.marginTop = value * 1.6 + "px";

  rocks.style.top = value * -0.15 + "px";
  forest.style.top = value * 0.35 + "px";
});
