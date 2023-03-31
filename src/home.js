import cosmosPizza from '../img/cosmos-pizza.jpg';
import yardPizza from '../img/yard-sale-pizza.avif';
import kramerThrow from '../img/kramer-pizza-throw.gif';

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

const populateHome = () => {

  const homeContent = document.querySelector('#content');
  const header = document.createElement('div');
  const footer = document.createElement('div');
  const callToAction = document.createElement('div');
  const orderButton = document.createElement('button');
  const homeImages = document.createElement('div');

  orderButton.className = 'header-bttn order-button';
  header.className = 'header';
  footer.className = 'footer';
  callToAction.className = 'call-to-action';
  homeImages.className = 'home-images';

  addTextItem("COSMO's", 'header-bttn cosmos', header)
  addTextItem('HOME', 'header-bttn home', header);
  addTextItem('MENU', 'header-bttn menu', header);
  addTextItem('ABOUT', 'header-bttn about', header);

  addTextItem('ORDER NOW &#127829', 'order-now', orderButton);

  addImg(cosmosPizza, 'cosmos-pizza', homeImages);
  addImg(yardPizza, 'yard-pizza', homeImages);

  addTextItem(' - You can even put cucumbers on your pie! - ', 'cucumber-pizza', callToAction);
  addImg(kramerThrow, 'kramer-throw', callToAction);

  addTextItem('Copyright&copy; Kramerica Industries', 'kramerica-copyright', footer);

  homeContent.appendChild(header);
  homeContent.appendChild(orderButton);
  homeContent.appendChild(homeImages);
  homeContent.appendChild(callToAction);
  homeContent.appendChild(footer);

}

export default populateHome;
export {
  addTextItem, addImg
}