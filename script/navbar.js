// Navbar links
const link1 = document.getElementById("nav-link1");
const link2 = document.getElementById("nav-link2");
// const link3 = document.getElementById("nav-link3");
const link4 = document.getElementById("nav-link4");

function isNonActiveLink() {
  link1.classList.remove("nav-a-active");
  link2.classList.remove("nav-a-active");
  // link3.classList.remove("nav-a-active");
  link4.classList.remove("nav-a-active");
}
function isActiveLink(link) {
  return link.classList.add("nav-a-active");
}
// 'Pages' used for navigation
const home = document.querySelector('#home');
const searchChannels = document.querySelector('#search-channels');
const byID = document.querySelector('#by-id');
// const compare = document.querySelector('#compare');
const guide = document.querySelector('#guide');

function hideAllPages() {
  home.style.display = 'none';
  searchChannels.style.display = 'none';
  byID.style.display = 'none';
  // compare.style.display = 'none';
  guide.style.display = 'none';
}

// Functions to navigate to current page
function displayHome() {
  isNonActiveLink();
  hideAllPages();
  home.style.display = 'block';
}
function displaySearchChannels() {
  isNonActiveLink();
  isActiveLink(link1);
  hideAllPages();
  searchChannels.style.display = 'block';
}
function displayByID() {
  isNonActiveLink();
  isActiveLink(link2);
  hideAllPages();
  byID.style.display = 'block';
}
// function displayCompare() {
//   isNonActiveLink();
//   isActiveLink(link3);
//   hideAllPages();
//   compare.style.display = 'block';
// }
function displayGuide() {
  isNonActiveLink();
  isActiveLink(link4);
  hideAllPages();
  guide.style.display = 'block';
}
