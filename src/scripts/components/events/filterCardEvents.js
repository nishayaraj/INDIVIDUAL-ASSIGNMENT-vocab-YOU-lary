import { getCards } from '../../../api/cardData';
import { showCards } from '../pages/showCards';

const filterCardEvents = (uid) => {
  const filterButtonId = 'filter-btns';

  document.querySelector(`#${filterButtonId}`).addEventListener('click', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A card
    if (e.target.id.includes(filterButtonId)) {
      const category = e.target.id.split(`${filterButtonId}-`)[1];

      getCards(uid, category).then((cardsArray) => showCards(cardsArray, category));
    }
  });
};

export default filterCardEvents;
