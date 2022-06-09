import renderToDOM from '../../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
    <div
      id="navigation">
    </div>
    <div
      id="filter-btns"
      style="display: flex; padding: 20px; align-items: center; justify-content: center;">
    </div>
    <div
      id="main-container">
      <div
        id="form-container">
      </div>
      <div
        id="cards-container"
        style="display: flex; padding: 20px; flex-wrap: wrap; justify-content: center;">
      </div>
    </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
