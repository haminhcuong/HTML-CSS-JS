function changeImage(thumb) {
  var imageElement = document.querySelector(".image");
  imageElement.setAttribute("src", thumb);
}

function changeBackground(color) {
  var background = document.querySelector("section");
  background.style.background = color;
}
