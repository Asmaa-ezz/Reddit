const select = id => document.getElementById(id);

const createElement = (parent, type, text) => {
  const element = document.createElement(type);
  if (type.toLowerCase() === 'i') {
    if (text.toLowerCase() === 'm') {
      element.setAttribute('class', 'fa fa-minus-square fa-2x m');
      element.style.color = '#ff0000';
      element.addEventListener('click', () => {
        console.log('mmmmmmm');
      });
    } else if (text.toLowerCase() === 'p') {
      element.setAttribute('class', 'fa fa-plus-square fa-2x');
      element.style.color = '#00ff00';
      element.addEventListener('click', () => {
        console.log('pppppp');
      });
    } else {
      element.setAttribute('class', 'fa fa-comments fa-2x');
      element.style.color = '#0000ff';
      element.addEventListener('click', () => {
        console.log('cccccc');
      });
    }
    parent.appendChild(element);
  } else if (type.toLowerCase() === 'a') {
    element.setAttribute('class', 'user-link');
    element.setAttribute('href', '#');
    element.setAttribute('target', '_blank');

    const t = document.createTextNode(text);
    element.appendChild(t);
    parent.appendChild(element);
  } else {
    const t = document.createTextNode(text);
    element.appendChild(t);
    parent.appendChild(element);
  }
};

const create = (parent, title, username, text) => {
  const post = document.createElement('div');
  post.setAttribute('class', 'post');
  const content = document.createElement('div');
  const buttons = document.createElement('div');
  buttons.setAttribute('class', 'but3');


  createElement(content, 'A', username);


  createElement(content, 'H2', title);
  createElement(content, 'HR', '');
  createElement(content, 'P', text);
  createElement(content, 'HR', '');

  createElement(buttons, 'i', 'c');
  createElement(buttons, 'H3', '0');
  createElement(buttons, 'i', 'm');
  createElement(buttons, 'i', 'p');
  createElement(buttons, 'H3', '0');

  post.appendChild(content);
  post.appendChild(buttons);

  parent.appendChild(post);
};

const link = select('signout');
const profile = select('profile');
const home = select('home');
const username = select('username');
const butCreatePost = select('createPost');
const content = select('content');


window.onload = () => {
  fetch(null, 'GET', '/authCheck')
    .then(res => username.textContent = res)
    .catch((err) => {
      if (err.message === 'no cookie') {
        window.location = '/sign_in';
      } else if (err.message === 'cookie is the not same in data') {
        fetch(null, 'GET', '/sign_out')
          .then(res => window.location = '/sign_in')
          .catch(err => console.log(err));
        window.location = '/sign_in';
      }
    });


  fetch(null, 'GET', '/git_all_post')
    .then(res => res.forEach(x => create(content, x.title, x.username, x.text)))
    .catch(err => alert(err.message));
};


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


butCreatePost.addEventListener('click', () => {
  window.location = '/post_create';
});


const btn = document.createElement('BUTTON'); // Create a <button> element
const t = document.createTextNode('CLICK ME'); // Create a text node
btn.appendChild(t); // Append the text to <button>
document.body.appendChild(btn);

btn.addEventListener('click', () => {
  console.log('aaaaaaaaa');
});
