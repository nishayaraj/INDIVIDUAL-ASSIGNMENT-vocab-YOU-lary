import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="title">Book Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Card Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Enter a Definition" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="description">Language/Tech</label>
        <textarea class="form-control" placeholder="language/tech" id="tech" style="height: 100px">${obj.tech || ''}</textarea>
      </div>
      <div class="form-group" id="select-card">
      </div>
      <button type="submit" class="btn btn-primary">Submit Card
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
