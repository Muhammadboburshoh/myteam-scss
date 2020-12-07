const hamburger = document.querySelector(".navmenu-togler")
const navmenu = document.querySelector(".sitenav__list")


hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("open-menu")
  hamburger.classList.toggle("open-button")
})

// about

const directorButton = document.querySelector(".director__button")
const directorEbout = document.querySelector(".director__active")
const directorOpen = document.querySelector(".directors__close")

// for (var i = 1; i <= 6; i++) {
//   directorButton.dataset.datas.binnimasi = i;
// }

directorButton.addEventListener("click", () => {

  // if (directorButton.)
  directorButton.classList.toggle("direction__about-wrapper-open")
  directorButton.classList.toggle("director__about-open")

  directorEbout.classList.toggle("director__active")
  directorEbout.classList.toggle("directors__close")

  directorOpen.classList.toggle("directors__close")
  directorOpen.classList.toggle("director__active")
})
