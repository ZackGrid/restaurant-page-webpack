import './style.css';
import populateHome from './home';
import menuTab from './menu';
import aboutTab from './about';

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

    if (document.querySelector('.about-tab')) {
      const about = document.querySelector('.about-tab');
      const intern = document.querySelector('.intern-wanted');
      const footer = document.querySelector('.footer');
      about.remove();
      intern.remove();
      footer.remove();
    }

    document.querySelector('.order-form') ? 0 : menuTab();
  }

  if (button.className.includes('about')) {

    homeImgs.remove();
    callToAction.remove();
    footer.remove();

    if (document.querySelector('.order-form')) {
      const menu = document.querySelector('.order-form');
      const footer = document.querySelector('.footer');
      menu.remove();
      footer.remove();
    }

    document.querySelector('.about-tab') ? 0 : aboutTab();
  }

}))


