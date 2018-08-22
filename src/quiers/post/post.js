const dbConnection = require('../../database/db_connection');

const addNewPost = (title, text, userId) => {
  const dateNow = new Date().toJSON().slice(0, 10);
  const sql = {
    text: 'INSERT INTO posts(title, text, date, user_id) values ($1,$2,$3,$4);',
    values: [title, text, dateNow, userId],
  };
  return new Promise((resolve, reject) => {
    dbConnection.query(sql, (err, res) => {
      if (err) return reject(new TypeError('Error in DB'));
      resolve(res.rows);
    });
  });
};


module.exports = addNewPost;
