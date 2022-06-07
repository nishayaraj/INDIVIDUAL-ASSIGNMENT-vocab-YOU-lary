import signIn from '../../helpers/auth/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<h2>Welcome to Vocab-You-Lary</h2>
  <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>`;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
