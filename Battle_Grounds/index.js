// Create a Bullet
document.addEventListener("click", function (e) {
  var bodyElement = document.querySelector("body");
  var bullet = document.createElement("span");
  bullet.classList.add("bullet");
  var x = e.offsetX;
  var y = e.offsetY;
  bullet.style.left = x + "px";
  bullet.style.top = y + "px";
  bodyElement.appendChild(bullet);

  // Remove a bullet after 4 seconds
  setTimeout(function () {
    bullet.remove();
  }, 4000);

  // Create sound
  var soundElement = document.querySelector('.audio');
  soundElement.play();
});
