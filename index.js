window.addEventListener('DOMContentLoaded', () => {
    const entrance = document.querySelector('.modal-login')
    const modalClose = document.querySelector('.modal-close')
    const loginLink = document.querySelector('.login-link')
    loginLink.addEventListener('click', (event) => {
        event.preventDefault()
        entrance.classList.add('modal-show')
    })
    modalClose.addEventListener('click', (event) => {
        entrance.classList.remove('modal-show')
    })
})