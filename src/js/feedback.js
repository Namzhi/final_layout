let showFeedback = document.querySelectorAll('.header__chat')
let clientWidth = document.body.clientWidth
for (let i = 0; i < showFeedback.length; i++) {
  showFeedback[i].addEventListener('click', function () {
    let overlay = document.querySelector('.overlay')
    let Feedback = document.querySelector('.feedback__wrapper')

    let header = document.querySelector('.header')

    let services__body = document.querySelector('.services__body')
    Feedback.classList.add('mobile-menu__wrapper--visible')
    overlay.classList.add('mobile-menu__wrapper--visible')

    header.classList.add('header--opacity-half')
    services__body.classList.add('header--opacity-half')
    overlay.classList.remove('overlay--hidden')
    let mobileMenu = document.querySelector('.mobile-menu__wrapper')
    mobileMenu.classList.remove('mobile-menu__wrapper--visible')
    hideFeedback(Feedback, services__body, header)
  })

  let hideFeedback = function (Feedback, services__body, header) {
    let overlay = document.querySelector('.overlay')
    let Feedback__exit = document.querySelector('.feedback__exit')

    overlay.addEventListener('click', function (evt) {
      Feedback.classList.remove('mobile-menu__wrapper--visible')

      header.classList.remove('header--opacity-half')
      services__body.classList.remove('header--opacity-half')
      overlay.classList.add('overlay--hidden')
    })
    Feedback__exit.addEventListener('click', function (evt) {
      Feedback.classList.remove('mobile-menu__wrapper--visible')

      if (
        clientWidth >= 1440 ||
        document.querySelector('.mobile-menu.mobile-menu__wrapper--visible') ==
          null
      ) {
        header.classList.remove('header--opacity-half')
        services__body.classList.remove('header--opacity-half')
        overlay.classList.add('overlay--hidden')
      }
    })
  }
}
