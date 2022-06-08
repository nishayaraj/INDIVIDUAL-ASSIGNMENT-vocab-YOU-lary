import { showCards } from '../pages/showCards';
import { createCard, updateCard } from '../../../api/cardData';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-card')) {
      const wordObject = {
        title: document.querySelector('#wordTitle').value,
        description: document.querySelector('#wordDescription').value,
        category: document.querySelector('#wordCategory').value,
        uid
      };

      createCard(wordObject).then((booksArray) => showCards(booksArray));
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');

      const wordObject = {
        title: document.querySelector('#wordTitle').value,
        description: document.querySelector('#wordDescription').value,
        category: document.querySelector('#wordCategory').value,
        uid,
        firebaseKey
      };

      updateCard(wordObject).then(showCards);
    }
  });
};

export default formEvents;
