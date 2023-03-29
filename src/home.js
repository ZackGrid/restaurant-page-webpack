import cosmosPizza from '../img/cosmos-pizza.jpg';
import yardPizza from '../img/yard-sale-pizza.avif';
import kramerThrow from '../img/kramer-pizza-throw.gif';

const populateHome = () => {

  const homeContent = document.querySelector('#content');
  const header = document.createElement('div');
  const footer = document.createElement('div');
  const callToAction = document.createElement('div');
  const orderButton = document.createElement('button');
  orderButton.className = 'order-button';
  header.className = 'header';
  footer.className = 'footer';
  callToAction.className = 'call-to-action';

  const homeImages = document.createElement('div');
  homeImages.className = 'home-images';

  const addTextItem = (text, className, element) => {
    const item = document.createElement('p');
    item.innerHTML = text;
    item.className = className;
    element.appendChild(item);
  }

  const addImg = (img, className, element) => {
    const newImg = document.createElement('img');
    newImg.src = img;
    newImg.className = className;
    element.appendChild(newImg);
  }

  addTextItem("COSMO's", 'cosmos', header)
  addTextItem('HOME', 'home', header);
  addTextItem('MENU', 'menu', header);
  addTextItem('ABOUT', 'about', header);

  homeContent.appendChild(header);

  addTextItem('ORDER NOW &#127829', 'order-now', orderButton);

  homeContent.appendChild(orderButton);

  addImg(cosmosPizza, 'cosmos-pizza', homeImages);
  addImg(yardPizza, 'yard-pizza', homeImages);

  homeContent.appendChild(homeImages);

  addTextItem(' - You can even put cucumbers on your pie! - ', 'cucumber-pizza', callToAction);
  addImg(kramerThrow, 'kramer-throw', callToAction);

  homeContent.appendChild(callToAction);

  addTextItem('Copyright&copy; Kramerica Industries', 'kramerica-copyright', footer);

  homeContent.appendChild(footer);

}

export default populateHome;