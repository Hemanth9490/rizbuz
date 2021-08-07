let navbarFixedElememant = document.getElementById("navbarFixed");

function getFixedNavBar() {
  if (window.scrollY > 50) {
    navbarFixedElememant.classList.add("fixed-top", "bg-primary");
  } else {
    navbarFixedElememant.classList.remove("fixed-top", "bg-primary");
  }
}

window.addEventListener("scroll", getFixedNavBar);
