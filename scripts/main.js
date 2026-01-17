const menuButton = document.getElementById("menuButton");
const navList = document.querySelector("#navMenu ul");
const menuIcon = document.getElementById("menuIcon");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("show");

  if (navList.classList.contains("show")) {
    menuIcon.textContent = "✖";
  } else {
    menuIcon.textContent = "☰";
  }
});