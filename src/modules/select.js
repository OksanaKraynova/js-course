const selectCurrent = document.querySelector('.select__current')
const selectItems = document.querySelectorAll('.select__item')
const select = document.querySelector('.select')
const inputs = document.querySelectorAll('.true')
const textarea = document.querySelector('textarea')
const selectToggle = () => select.classList.toggle('active')


selectCurrent.addEventListener('click', selectToggle)

selectItems.forEach(item => {
    item.addEventListener('click', () => {
        selectCurrent.innerText = item.innerText
        select.classList.remove('active')
    })
})

inputs.forEach(item => {
    item.addEventListener('change', () => item.classList.add('value'))
})
textarea.addEventListener('change', () => textarea.classList.add('value'))