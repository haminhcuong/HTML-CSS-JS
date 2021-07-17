const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const topbar = document.querySelector(".topbar");
const main = document.querySelector(".main");

toggle.addEventListener("click", (e) => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
  topbar.classList.toggle("active");
});
