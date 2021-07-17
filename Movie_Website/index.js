const toggleBall = document.querySelector(".toggle-ball");
const menuListItems = document.querySelectorAll(".menu-list-item");
const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
const navbarContainer = document.querySelector(".navbar-container");
const sidebar = document.querySelector(".sidebar");
const sidebarIcons = document.querySelectorAll(".sidebar-icon");
const container = document.querySelector(".container");

toggleBall.addEventListener("click", function (e) {
  toggleBall.classList.toggle("light");
  toggle.classList.toggle("light");
  navbar.classList.toggle("light");
  navbarContainer.classList.toggle("light");
  sidebar.classList.toggle("light");
  sidebarIcons.forEach((sidebarIcon) => {
    sidebarIcon.classList.toggle("light");
  });
  container.classList.toggle("light");
});

menuListItems.forEach((menuListItem) => {
  menuListItem.addEventListener("click", function (e) {
    menuListItems.forEach((menuListItem) => {
      menuListItem.classList.remove("active");
    });
    this.classList.add("active");
  });
});
