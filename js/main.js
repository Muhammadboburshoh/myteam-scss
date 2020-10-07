const hamburger = document.querySelector(".navmenu-togler")
const navmenu = document.querySelector(".sitenav__list")


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("navmenu-togler")
  navmenu.classList.toggle("open-menu")
  // hamburger.classList.toggle("open-button")
})