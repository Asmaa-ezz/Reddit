const path = require('path');
const { handlerError500 } = require('./error');
const { readFile, authChekCookie } = require('./function');

const handlerProfile = (request, response) => {
  response.end(JSON.stringify({ result: 'Pass' }));
};

const handlerProfilePage = (request, response) => {
  readFile(path.join(__dirname, '..', '..', 'public', 'profile.html'))
    .then(res => response.end(res))
    .catch(err => handlerError500(request, response));
};

const handlerProfileData = (request, response) => {
  // let allData = '';
  // request.on('data', (chunk) => {
  //     allData += chunk;
  // });
  //
  // request.on('end', () => {
  //     const data = JSON.parse(allData);
  // }


};

module.exports = { handlerProfileData, handlerProfilePage };
