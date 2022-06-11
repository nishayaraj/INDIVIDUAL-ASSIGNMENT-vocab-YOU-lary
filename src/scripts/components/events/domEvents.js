import { showCards } from '../pages/showCards';
import { deleteCard, getSingleCard } from '../../../api/cardData';
import addVocabForm from '../forms/addVocabForm';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A CARD
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey, uid).then((cardsArray) => showCards(cardsArray));
      }
    }

    // view a card
    if (e.target.id.includes('view-card-btn')) {
      const [, firebaseKey] = e.target.id.split('view-card-btn--');
      getSingleCard(firebaseKey, uid).then((cardObject) => showCards([cardObject]));
    }

    // edits an existing card
    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey, uid).then((wordObj) => addVocabForm(wordObj));
    }
  });
};

export default domEvents;
