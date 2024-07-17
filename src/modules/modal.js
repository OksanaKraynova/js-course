
const btn = document.querySelector('.header__btn')
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal__close')


btn.addEventListener('click', () => modal.classList.add('active'))

modalBtn.addEventListener('click', () => modal.classList.remove('active'))