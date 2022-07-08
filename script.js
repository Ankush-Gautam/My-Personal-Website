//LIGHT-DARK THEME TOGGLE
const lightBtn = document.getElementById('dark-theme-toggle')
const darkBtn = document.getElementById('light-theme-toggle')

//body of html
const body = document.getElementById('body')

//dark theme toggler
lightBtn.addEventListener('click', () => {
  lightBtn.classList.add('hidden')
  darkBtn.classList.remove('hidden')
  body.classList.add('dark-theme')
})

//light theme toggler
darkBtn.addEventListener('click', () => {
  darkBtn.classList.add('hidden')
  lightBtn.classList.remove('hidden')

  body.classList.remove('dark-theme')
})

// HAMBURGER MENU 
const openBtn = document.getElementById('open-menu')
const closeBtn = document.getElementById('close-menu')
const nav = document.getElementById("nav")

openBtn.addEventListener('click', () => {
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block"
  nav.style.display = "block"
})

closeBtn.addEventListener('click', () => {
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block"
  nav.style.display = "none"
})


//PROGRESS BAR - SKILLS
const progress = document.querySelectorAll('.progress-value')

function progressBar() {
  for (let i = 0; i < progress.length; i++) {
    progress[i].style.width = progress[i].getAttribute('data-value') + "%"
    progress[i].textContent = progress[i].getAttribute('data-value') + "%"
  }
}

progressBar();
