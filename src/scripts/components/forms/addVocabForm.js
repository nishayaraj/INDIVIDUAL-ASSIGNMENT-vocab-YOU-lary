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
        <label for="title"><b>ENTER YOUR WORD</b></label>
        <input type="text" class="form-control" id="wordTitle" aria-describedby="cardTitle" placeholder="My New Word is" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description"><b>ENTER WORD DESCRIPTION</b></label>
        <textarea class="form-control" placeholder="Word Means ..." id="wordDescription" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="description"><b>ENTER WORD LANGUAGE/TECH</b></label>
        <textarea class="form-control" placeholder="Language/Tech" id="wordCategory" style="height: 100px">${obj.category || ''}</textarea>
      </div>
      <div class="form-group" id="select-card">
      </div>
      <button type="submit" class= class="btn btn-outline-dark">Submit Card
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
