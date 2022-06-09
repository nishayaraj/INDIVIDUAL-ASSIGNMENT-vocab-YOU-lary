import renderToDOM from '../../helpers/renderToDom';

const showFilterButtons = (filterCategory) => {
  const spacer = '<div style="width: 10px;"></div>';

  let filterButtonsDom = spacer;

  filterCategory.forEach((category) => {
    filterButtonsDom += `<button type="button" class="btn btn-dark btn-sm" id='filter-btns-${category}'>${category}</button>${spacer}`;
  });

  renderToDOM('#filter-btns', filterButtonsDom);
};

export default showFilterButtons;
