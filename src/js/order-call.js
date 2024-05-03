const showOrderCall = document.querySelectorAll('.header__call')
const services = document.querySelector('.services')
const overlay = document.createElement('div')
const orderCall = document.querySelector('.order-call__wrapper')
const orderCall__exit = document.querySelector('.order-call__exit')
const header = document.querySelector('.header')
const services__body = document.querySelector('.services__body')
const mobileMenu = document.querySelector('.mobile-menu__wrapper')

for (let i = 0; i < showOrderCall.length; i++) {
  showOrderCall[i].addEventListener('click', function () {
    if (document.querySelector('.overlay') !== null) {
      document.querySelector('.overlay').remove()
    }

    overlay.classList.add('overlay', 'overlay--position')
    services.append(overlay)

    orderCall.classList.add('mobile-menu__wrapper--visible')

    mobileMenu.classList.remove('mobile-menu__wrapper--visible')
    hideOrderCall(orderCall, services__body, header)
  })

  const hideOrderCall = function (orderCall) {
    const overlay = document.querySelector('.overlay')

    overlay.addEventListener('click', function () {
      orderCall.classList.remove('mobile-menu__wrapper--visible')
      overlay.remove()
    })
    orderCall__exit.addEventListener('click', function () {
      orderCall.classList.remove('mobile-menu__wrapper--visible')
      if (document.querySelector('.overlay')) {
        document.querySelector('.overlay').remove()
      }
    })
  }
}
