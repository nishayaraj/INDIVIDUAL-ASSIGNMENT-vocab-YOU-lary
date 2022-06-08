import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#cards-container', domString);
};

const showCards = (cardsArray) => {
  console.warn(cardsArray);
  clearDom();

  if (cardsArray.length > 0) {
    let domString = '';
    cardsArray.forEach((card) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${card.category}</h6>
          <p class="card-text">${card.description}</p>
          <hr> 
          <i id="edit-card-btn--${card.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-card-btn--${card.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
    });

    renderToDOM('#cards-container', domString);
  } else {
    emptyCards();
  }
};

export { showCards, emptyCards };
