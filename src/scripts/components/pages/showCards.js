import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';
import showFilterButtons from './showFilterButtons';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#cards-container', domString);
};

const showCards = (cardsArray, filter) => {
  clearDom();

  if (cardsArray.length > 0) {
    const filterCategory = [];

    let domString = '';
    cardsArray.forEach((card) => {
      domString += `
        <div class="card" style="width: 18rem; margin: 10px; border-radius: 16px; background-color:#d1e8e2;">
          <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${card.category}</h6>
            <p class="card-text">${card.description}</p>
            <hr> 
            <i class="btn btn-success fas fa-eye" id="view-card-btn--${card.firebaseKey}"></i>
            <i id="edit-card-btn--${card.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-card-btn--${card.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
          </div>
        </div>`;

      if (!filterCategory.includes(card.category)) { filterCategory.push(card.category); }
    });

    renderToDOM('#cards-container', domString);

    if (!filter) { showFilterButtons(filterCategory); }
  } else {
    emptyCards();
  }
};

export { showCards, emptyCards };
