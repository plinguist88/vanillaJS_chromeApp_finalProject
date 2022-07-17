const $loginForm = document.querySelector('#loginForm');
const $loginInput = document.querySelector('#loginform input');
const $user = document.querySelector('#user');

const USERNAME_KEY = 'username';
const HiDDEN_CLASSNAME = 'hidden';

function submitLoginForm(event) {
  event.preventDefault();

  const username = $loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  afterLogin(username);
};

function afterLogin(username) {
  $loginForm.classList.add(HiDDEN_CLASSNAME);
  $user.classList.remove(HiDDEN_CLASSNAME);
  $user.innerText = `Hello, ${username}!!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  $loginForm.classList.remove(HiDDEN_CLASSNAME);
  $loginForm.addEventListener('submit', submitLoginForm);
} else {
  afterLogin(savedUsername);
}