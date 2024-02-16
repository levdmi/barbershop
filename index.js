window.addEventListener('DOMContentLoaded', () => {
    const entrance = document.querySelector('.modal-login')
    const modalClose = document.querySelector('.modal-close')
    const loginLink = document.querySelector('.login-link')
    const form = entrance.querySelector('form')
    const login = entrance.querySelector('[name=login]')
    const password = entrance.querySelector('[name=password]')
    loginLink.addEventListener('click', (event) => {
        event.preventDefault()
        entrance.classList.add('modal-show')
    })
    modalClose.addEventListener('click', (event) => {
        entrance.classList.remove('modal-show')
    })
    form.addEventListener('submit', (event) => {
        console.log(login.value, password.value)
        event.preventDefault()
        if (login.value && password.value) {
            console.log('We have login and password')
        } else {
            entrance.classList.add('modal-error')
            // alert('Введите логин и пароль')
        }
    })
    window.addEventListener('keydown', event => {
        if (event.keyCode === 27) {
            event.preventDefault()
            entrance.classList.remove('modal-show')
        }
    })
})