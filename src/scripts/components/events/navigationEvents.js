import { getCards } from '../../../api/cardData';
import signOut from '../../helpers/auth/signOut';
import addVocabForm from '../forms/addVocabForm';
import { showCards } from '../pages/showCards';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: CREATE CARDS
  document.querySelector('#create-cards').addEventListener('click', () => {
    addVocabForm(uid);
  });

  // // ALL CARDs
  document.querySelector('#all-cards').addEventListener('click', () => {
    console.warn('clicked all cards');
    getCards(uid).then((cardsArray) => showCards(cardsArray));
  });
};
export default navigationEvents;
