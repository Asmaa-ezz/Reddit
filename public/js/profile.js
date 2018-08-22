const select = id => document.getElementById(id);

const link = select('signout');
const profile = select('profile');
const home = select('home');


link.addEventListener('click', () => {
  fetch(null, 'GET', '/sign_out')
    .then(res => window.location = '/sign_in')
    .catch(err => alert(err.message));
});

profile.addEventListener('click', () => {
  window.location = '/profile';
});

home.addEventListener('click', () => {
  window.location = '/home';
});
