let button = document.querySelectorAll('.button')
let showMobileMenu = document.querySelector('.header__menu.button:first-child')
let clientWidth = document.body.clientWidth
let mobileMenu = document.querySelector('.mobile-menu__wrapper')
let header = document.querySelector('.header')
let services = document.querySelector('.services')
let services__body = document.querySelector('.services__body')
let overlay = document.createElement('div')
let mobileMenu__exit = document.querySelector('.mobile-menu__exit')

if (clientWidth < 1440) {
  showMobileMenu.addEventListener('click', function () {
    mobileMenu.classList.add('mobile-menu__wrapper--visible')

    services.append(overlay)
    overlay.classList.add('overlay', 'overlay--position')
    hideMobileMenu(mobileMenu, services__body, header)
  })
}

let hideMobileMenu = function (mobileMenu) {
  let overlay = document.querySelector('.overlay')
  overlay.addEventListener('click', function () {
    mobileMenu.classList.remove('mobile-menu__wrapper--visible')
    overlay.remove()
  })
  mobileMenu__exit.addEventListener('click', function () {
    mobileMenu.classList.remove('mobile-menu__wrapper--visible')
    overlay.remove()
  })
}
