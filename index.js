window.addEventListener('DOMContentLoaded', () => {
    const entrance = document.querySelector('.modal-login')
    const modalClose = document.querySelector('.modal-close')
    const loginLink = document.querySelector('.login-link')
    const form = entrance.querySelector('form')
    const login = entrance.querySelector('[name=login]')
    const password = entrance.querySelector('[name=password]')
    const maplink= document.querySelector('.map')
    const mapDialog= document.querySelector('.modal-map')
    const mapclose = document.querySelector('.map-modal-close')
    console.log(maplink, mapDialog, mapclose)
    if(maplink){
        maplink.addEventListener('click',event =>{
            event.preventDefault()
            mapDialog.classList.add('modal-show')
            mapDialog.classList.add('modal-map-animation')
            setTimeout(() => {
                mapDialog.classList.remove('modal-map-animation')
            }, 500)
        })
        mapclose.addEventListener('click',(event)=>{
            mapDialog.classList.remove('modal-show')
        })
    }
    loginLink.addEventListener('click', (event) => {
        event.preventDefault()
        entrance.classList.add('modal-show')
        entrance.classList.add('modal-show-animation')
        setTimeout(() => {
            entrance.classList.remove('modal-show-animation')
        }, 600)
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
            setTimeout(() => {
                entrance.classList.remove('modal-error')
            }, 600)
        }
    })
    window.addEventListener('keydown', event => {
        if (event.keyCode === 27) {
            event.preventDefault()
            entrance.classList.remove('modal-show')
        }
    })
    
    const shopList = Array.from(document.querySelectorAll('.catalog-list .catalog-item .catalog-item-title'))
    const filters = Array.from(document.querySelectorAll('.checkboxes .filter-option input'))
    function changeShopList(event){
        const targetLable = event.target.name
        const action = event.target.checked
        const indexForChange = []
        for(const key in shopList){
            if(shopList[key].innerHTML === `«${targetLable}»`){
                indexForChange.push(key)
            }
        }
        for(const value of indexForChange){
            const el = shopList[value].parentNode.parentNode.parentNode
            if(action){
                el.style.display = ''
            }
            else{
                el.style.display = 'none'
            }
        }
    }
    if(filters.length){
        for(const filter of filters){
            filter.addEventListener('input',changeShopList)
        }
    }
})