const path = require('path');
const { handlerError500 } = require('./error');
const { readFile } = require('./function');
const addNewPost = require('../quiers/post/post');
const { getDataOfPost } = require('../quiers/get/post');

const handlerPostCreatePage = (request, response) => {
  readFile(path.join(__dirname, '..', '..', 'public', 'post_create.html'))
    .then(res => response.end(res))
    .catch(err => handlerError500(request, response));
};

const handlerPostCreateData = (request, response) => {
  let allData = '';
  request.on('data', (chunk) => {
    allData += chunk;
  });

  request.on('end', () => {
    const data = JSON.parse(allData);
    addNewPost(data.title, data.text, data.userId)
      .then(res => response.end(JSON.stringify({ result: 'pass' })))
      .catch(err => response.end(JSON.stringify({ err: err.message })));
  });
};

const handlerGitAllPost = (request, response) => {
  getDataOfPost()
    .then(res => response.end(JSON.stringify({ result: res })))
    .catch(err => response.end(JSON.stringify({ err: err.message })));
};


module.exports = { handlerPostCreatePage, handlerPostCreateData, handlerGitAllPost };
