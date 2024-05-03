const showFeedback = document.querySelectorAll('.header__chat')
const clientWidth = document.body.clientWidth
const services__body = document.querySelector('.services__body')
const services = document.querySelector('.services')
const overlay = document.createElement('div')
const Feedback = document.querySelector('.feedback__wrapper')
const mobileMenu = document.querySelector('.mobile-menu__wrapper')
const header = document.querySelector('.header')
const Feedback__exit = document.querySelector('.feedback__exit')

for (let i = 0; i < showFeedback.length; i++) {
  showFeedback[i].addEventListener('click', function () {
    if (document.querySelector('.overlay') !== null) {
      document.querySelector('.overlay').remove()
    }
    services.append(overlay)
    overlay.classList.add('overlay', 'overlay--position')

    Feedback.classList.add('mobile-menu__wrapper--visible')

    mobileMenu.classList.remove('mobile-menu__wrapper--visible')
    hideFeedback(Feedback, services__body, header)
  })

  const hideFeedback = function (Feedback) {
    overlay.addEventListener('click', function (evt) {
      Feedback.classList.remove('mobile-menu__wrapper--visible')
      if (document.querySelector('.overlay')) {
        document.querySelector('.overlay').remove()
      }
    })
    Feedback__exit.addEventListener('click', function (evt) {
      if (document.querySelector('.overlay')) {
        document.querySelector('.overlay').remove()
      }
      Feedback.classList.remove('mobile-menu__wrapper--visible')
    })
  }
}
