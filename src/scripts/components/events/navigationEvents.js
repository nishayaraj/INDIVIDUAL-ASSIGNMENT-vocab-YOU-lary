import { getCards } from '../../../api/cardData';
import signOut from '../../helpers/auth/signOut';
import { showCards } from '../pages/showCards';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: ALL CARDS
  document.querySelector('#all-books').addEventListener('click', () => {
    getCards(uid).then((cardsArray) => showCards(cardsArray));
  });
};
export default navigationEvents;
