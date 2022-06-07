import { showCards } from '../pages/showCards';
import { deleteCard } from '../../../api/cardData';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey, uid).then((cardsArray) => showCards(cardsArray));
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
  });
};

export default domEvents;
