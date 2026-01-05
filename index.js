//Responsive Nav
const btn = document.getElementById("c-btn");
const iconB = document.getElementById("iconBtn");
const navLinks = document.getElementsByClassName("nav-links")[0];

btn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isActive = navLinks.classList.contains("active");

  iconB.classList = isActive ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});
//Scroll to top
let topBtn = document.getElementById("scroll");

window.onscroll = function () {
  scrollToTop();
};
function scrollToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function toTheTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// about me section
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (const tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
