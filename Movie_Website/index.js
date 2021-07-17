const toggleBall = document.querySelector(".toggle-ball");
const menuListItems = document.querySelectorAll(".menu-list-item");

toggleBall.addEventListener("click", function (e) {
  toggleBall.classList.toggle("active");
});

menuListItems.forEach((menuListItem) => {
  menuListItem.addEventListener("click", function (e) {
    menuListItems.forEach((menuListItem) => {
      menuListItem.classList.remove("active");
    });
    this.classList.add("active");
  });
});
