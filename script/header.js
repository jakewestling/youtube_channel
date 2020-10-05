let userSidebar = document.getElementById("user-sidebar");
let overlayCanvas = document.getElementById("overlay-canvas");

function openSidebar() {
  userSidebar.className = "user-sidebar-open";
  overlayCanvas.style.width = "100%";
  overlayCanvas.style.opacity = "0.1";
}
function closeSidebar() {
  userSidebar.className = "user-sidebar-close";
  overlayCanvas.style.width = "0%";
  overlayCanvas.style.opacity = "0";
}
window.onscroll = function () { closeSidebarScroll() };
function closeSidebarScroll() {
  if (userSidebar.className === "user-sidebar-open") {
    closeSidebar();
  }
}