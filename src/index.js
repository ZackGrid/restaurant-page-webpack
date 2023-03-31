import './style.css';
import populateHome from './home';
import menuTab from './menu';

populateHome();

const homeImgs = document.querySelector('.home-images');
const callToAction = document.querySelector('.call-to-action');
const headerBttns = document.querySelectorAll('.header-bttn');
const footer = document.querySelector('.footer');

headerBttns.forEach(button => button.addEventListener('click', () => {

  if (button.className.includes('home') || button.className.includes('cosmos')) {

    window.location.reload();
  }

  if (button.className.includes('menu') || button.className.includes('order-button')) {

    homeImgs.remove();
    callToAction.remove();
    footer.remove();

    document.querySelector('.order-form') ? 0 : menuTab();
  }



}))


