const select = id => document.getElementById(id);

const isEmpty = element => element.value.trim().toString().length === 0;


const title = select('title');
const text = select('text');
const btnCreate = select('create');
const hidden = select('hidden');

window.onload = () => {
  fetch(null, 'GET', '/authCheck_id')
    .then(res => hidden.value = res)
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
};


btnCreate.addEventListener('click', () => {
  if (isEmpty(title) && isEmpty(text)) {
    alert('Fill the filed');
  } else {
    const object = {
      title: title.value,
      text: text.value,
      userId: hidden.value,
    };

    fetch(object, 'POST', '/post_create')
      .then(res => window.location = '/home')
      .catch(err => alert(err.message));
  }
});
