import { addImg, addTextItem } from "./home";
import kramer from '../img/kramer.jpg';

const aboutTab = () => {

  const homeContent = document.querySelector('#content');
  const about = document.createElement('div');
  const internWanted = document.createElement('div');
  const footer = document.createElement('div');
  internWanted.className = 'intern-wanted';
  about.className = 'about-tab';
  about.innerHTML = '<h2>About</h2>';
  footer.className = 'footer';

  addTextItem('“It\'s a pizza place where you make your own pie! We give you the dough, the sauce, the cheese...you pound it, slap it, you flip it up into the air...you put your toppings on and you slide it into the oven! Sounds good, huh?”  — Cosmo Kramer, Seinfeld, Season 6: The Couch', 'about-txt', about);

  addImg(kramer, 'kramer-img', about);

  addTextItem('Address: 129 west 81st street, New York/NY', 'address', about);

  addTextItem('Intern Wanted!', 'intern-wanted-txt', internWanted);
  addTextItem('Get real-world corporate experience', 'experience', internWanted);
  addTextItem('Apply', 'apply', internWanted);

  addTextItem('Copyright&copy; Kramerica Industries', 'kramerica-copyright', footer);


  homeContent.appendChild(about);
  homeContent.appendChild(internWanted);
  homeContent.appendChild(footer);
}

export default aboutTab;