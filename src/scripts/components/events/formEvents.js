import { showCards } from '../pages/showCards';
import { createCard, updateCard } from '../../../api/cardData';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-card')) {
      const cardObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        tech: document.querySelector('#tech').value,
        uid
      };
      createCard(cardObject).then((booksArray) => showCards(booksArray));
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const cardObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        tech: document.querySelector('#tech').value,
        firebaseKey,
        uid
      };

      updateCard(cardObject).then(showCards);
    }
  });
};

export default formEvents;
