import '../scss/style.scss';

new Swiper(".swiper-container", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView:'auto',
  slidesPerGroup: 1,
});

import './swiper-bundle.min.js';

console.log('Works!', 2);

window.popup = function popup() {
  const element = document.querySelector('.main-menu');
  const arrow = document.querySelector('.hide')

  element.classList.toggle('main-menu--hidden');
  arrow.classList.toggle('hide--rotate');

  if (element.classList.contains('main-menu--hidden')) {
    arrow.textContent = 'Показать всё';
  } else {
    arrow.textContent = 'Скрыть';
  }
}

window. popupText = function popupText() {
  const element = document.querySelector('.main-info__text3');
  element.classList.toggle('main-info__text--hidden');

  const text = document.querySelector('.read-more');
  text.classList.toggle('read-more--rotate')

  if (element.classList.contains('main-info__text--hidden')) {
    text.textContent = 'Скрыть';
  } else {
    text.textContent = 'Читать далее';
  }

}

window.popupMenu = function popupMenu() {
  const element = document.querySelector('.sub-menu');
  element.classList.toggle('sub-menu--hidden');

  const menu = document.querySelector('.sub-menu__hide');
  menu.classList.toggle('sub-menu__hide--rotate');

  if (element.classList.contains('sub-menu__hide')) {
    menu.textContent = 'Скрыть';
  } else {
    menu.textContent = 'Показать всё'
  }
}

const body = document.querySelector('body')

window.popupMobileMenu = function popupMobileMenu() {
  const element = document.querySelector('.mobile__container');
  element.classList.add('mobile__container--hidden');
  blur.style.zIndex = '5';
  body.style.overflow = 'hidden'
}

window.popupMobileMenuHide = function popupMobileMenuHide() {
  const element = document.querySelector('.mobile__container');
  element.classList.remove('mobile__container--hidden');
  blur.style.zIndex = '-1';
  body.style.overflow = 'auto'
}

const feedback = document.querySelector('.feedback')
const reserveCall = document.querySelector('.call--hidden')

window.popupFeedback = function popupFeedback() {
  feedback.classList.add('feedback__popup')
  blur.style.zIndex = '5';
  body.style.overflow = 'hidden'
}

window.popupFeedbackCancel = function popupFeedbackCancel() {
  feedback.classList.remove('feedback__popup')
  blur.style.zIndex = '-1';
  body.style.overflow = 'auto'
}

window.popupCall = function popupCall() {
  reserveCall.classList.add('call--popup');
  blur.style.zIndex = '5';
  body.style.overflow = 'hidden'
}

window.popupCallCancel = function popupCallCancel() {
  reserveCall.classList.remove('call--popup');
  blur.style.zIndex = '-1';
  body.style.overflow = 'auto'
}

const blur = document.querySelector('.blur');
const mobile = document.querySelector('.mobile__container');

blur.addEventListener('click', function() {
  mobile.classList.remove('mobile__container--hidden');
  document.querySelector('.feedback').classList.remove('feedback__popup')
  document.querySelector('.call--hidden').classList.remove('call--popup')
  document.querySelector('body').style.overflow = 'auto';
  blur.style.zIndex = '-1'
})

console.log('Works!');

