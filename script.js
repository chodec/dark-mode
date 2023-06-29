const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')
const head = document.querySelector('head')
const title = head.children[2]
const fav = head.children[3]

function imgMode(mode) {
    image1.src = `img/undraw_proud_coder_${mode}.svg`
    image2.src = `img/undraw_feeling_proud_${mode}.svg`
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`
}

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    textBox.style.backgroundColor = 'rgB(255 255 255 / 50%)'
    toggleIcon.children[0].textContent = 'Dark mode'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    imgMode('dark')
    title.textContent = 'Dark Mode'
    fav.src = 'img/dark.png'
}

function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    textBox.style.backgroundColor = 'rgB(0 0 0 / 50%)'
    toggleIcon.children[0].textContent = 'Light mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    imgMode('light')
    title.textContent = 'Light Mode'
    fav.src = 'img/light.png'
}

function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        darkMode()
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        lightMode()
    }
}

toggleSwitch.addEventListener('change', switchTheme)