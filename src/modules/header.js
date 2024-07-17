const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__mobile')
const list = document.querySelector('.header__list')
const courses = document.querySelector('#courses')
const start = document.querySelector('#start')

courses.addEventListener('click', () => {
    list.classList.toggle('active')
    courses.classList.toggle('active')
})

burger.addEventListener('click', () => menu.classList.toggle('active'))

start.addEventListener('click', () => menu.classList.remove('active'))