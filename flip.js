// section 1
document.querySelector(".hotel-hamburger").addEventListener("click", () => {
  document.querySelector(".hotel-nav-links").classList.toggle("active");
});

function showPopup(side) {
  document.getElementById(`popup-${side}`).classList.add("active");
}
function closePopup(side) {
  document.getElementById(`popup-${side}`).classList.remove("active");
}

// section 1