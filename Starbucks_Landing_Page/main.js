function imgSlider(image) {
  document.querySelector(".starbucks").src = image;
}

function changeCircleColor(color) {
  var circleElement = document.querySelector(".circle");
  circleElement.style.background = color;
}

function toggleMenu() {
  var menu = document.querySelector(".toggle");
  menu.classList.toggle("active");

  var navigation = document.querySelector(".navigation");
  navigation.classList.toggle("active");
}
