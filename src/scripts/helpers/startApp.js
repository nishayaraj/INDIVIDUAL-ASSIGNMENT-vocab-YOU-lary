import { getCards } from '../../api/cardData';
import navBar from '../components/pages/navBar';
import domBuilder from '../components/pages/domBuilder';
import { showCards } from '../components/pages/showCards';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import navigationEvents from '../components/events/navigationEvents';
import filterCardEvents from '../components/events/filterCardEvents';
import logoutButton from '../components/buttons/logoutButton';

const startApp = (user) => {
  console.warn(user.uid);

  domBuilder(); // BUILD THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton();
  domEvents(user.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user.uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navigationEvents(user.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  filterCardEvents(user.uid); // ATTACH THE EVENT LISTENERS TO filter buttons

  // TODO: Put all books on the DOM on App load
  getCards(user.uid).then((cardsArray) => showCards(cardsArray));
};

export default startApp;
