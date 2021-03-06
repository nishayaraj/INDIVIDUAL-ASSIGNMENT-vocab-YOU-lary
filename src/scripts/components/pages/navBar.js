import renderToDOM from '../../helpers/renderToDom';
import BookImg from '../../../images/book.png';

const navBar = () => {
  const domString = `
    <nav
      class="navbar fixed-top navbar-expand-lg bg-dark mb-5"
      style="box-shadow: 0px 2px 5px #777;background-color: white !important;"
      id="navBar">
      <div
        class="container-fluid"
        style="align-items: center;">
        <a
          class="navbar-brand title" href="#"
          style="font-weight: bold;font-size: 28px;display: flex;align-items: center;">
          <img
            src="${BookImg}"
            style="height: 45px;margin-right: 8px;">
          Vocab-YOU-Lary
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span
            class="navbar-toggler-icon">
          </span>
        </button>
        <div
          class="collapse navbar-collapse"
          style="flex-grow: 0;"
          id="navbarText">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0"
            style="align-items: center;justify-items: center;">
            <li
              class="nav-item active">
              <a
                class="nav-link"
                href="#"
                style="background-color: #fff;border: 1px solid #ced4da;border-radius: 8px;margin: 0px 10px;"
                id="all-cards">
                All Cards
                <span
                  class="sr-only">
                  (current)
                </span>
              </a>
            </li>
            <li
              class="nav-item">
              <a
                class="nav-link"
                href="#"
                style="background-color: #fff;border: 1px solid #ced4da;border-radius: 8px;margin: 0px 10px;"
                id="create-cards">
                Create Entry
              </a>
            </li>
            <form
              class="d-flex"
              style="margin: 0 20px;"
              role="search">
              <input
                class="form-control me-2"
                style="margin-right: 4px !important;"
                type="search"
                placeholder="Search"
                aria-label="Search">
              <button
                class="btn btn-outline-secondary"
                type="submit">
                Search
              </button>
            </form>
            <li
              class="nav-item">
              <a
                class="nav-link"
                href="#"
                id="logout-button">
                Logout
              </a>
            </li>
          </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
