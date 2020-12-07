const hamburger = document.querySelector(".navmenu-togler")
const navmenu = document.querySelector(".sitenav__list")


hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("open-menu")
  hamburger.classList.toggle("open-button")
})

// about

const directorButton = document.querySelector(".director__about-open")
const directorEbout = document.querySelector(".actev-wrapper")
const directorOpen = document.querySelector(".direction__about-wrapper")


directorButton.addEventListener("click", () => {

  // if (directorButton.)
  // directorButton.classList.toggle("direction__about-wrapper-open")

  directorEbout.classList.toggle("actev-wrapper")
  directorEbout.classList.toggle("direction__about-wrapper")

  directorOpen.classList.toggle("direction__about-wrapper")
  directorOpen.classList.toggle("actev-wrapper")
})
