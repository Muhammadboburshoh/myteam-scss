const hamburger = document.querySelector(".navmenu-togler")
const navmenu = document.querySelector(".sitenav__list")

console.log(hamburger);

hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("open-menu")
  hamburger.classList.toggle("open-button")
  // hamburger.classList.toggle("navmenu-togler")
})


//about page

const directorButtons = document.querySelectorAll(".director__button")
const directorEbouts = document.querySelectorAll(".director__active")
const directorOpens = document.querySelectorAll(".directors__close")

for (let i = 0; i < directorButtons.length; i++) {

  directorButtons[i].addEventListener("click", () => {

    directorButtons[i].classList.toggle("direction__about-wrapper-open")
    directorButtons[i].classList.toggle("director__about-open")

    directorEbouts[i].classList.toggle("director__active")
    directorEbouts[i].classList.toggle("directors__close")
  
    directorOpens[i].classList.toggle("directors__close")
    directorOpens[i].classList.toggle("director__active")

  })
}


