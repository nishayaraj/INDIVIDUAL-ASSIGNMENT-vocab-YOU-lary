import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

/**
 *
 {
        "category": "tech",
        "description": "my word description",
        "firebaseKey": "-N3jxFJMrZBoPZBFdCGE",
        "time": "",
        "title": "my first word",
        "uid": "sGJkiouC75hVOXNaxnPOu5qmU0c2"
    }
 */

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="title">Enter your word</label>
        <input type="text" class="form-control" id="wordTitle" aria-describedby="cardTitle" placeholder="My new word is" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Enter your word description</label>
        <textarea class="form-control" placeholder="word means ..." id="wordDescription" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="description">Enter word language/tech</label>
        <textarea class="form-control" placeholder="language/tech" id="wordCategory" style="height: 100px">${obj.category || ''}</textarea>
      </div>
      <div class="form-group" id="select-card">
      </div>
      <button type="submit" class="btn btn-primary">Submit Card
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
