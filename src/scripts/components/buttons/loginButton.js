import signIn from '../../helpers/auth/signIn';
import renderToDOM from '../../helpers/renderToDom';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
    <button
      id="google-auth"
      style="background-color: #0d6efd;border: 1px solid #ced4da;border-radius: 8px;margin: 0px 10px;"
      class="btn btn-secondary ml-2">
      <i
        class="fas fa-sign-out-alt logout">
      </i>
      Log in with Google
    </button>`;

  renderToDOM('#app', domString);
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
