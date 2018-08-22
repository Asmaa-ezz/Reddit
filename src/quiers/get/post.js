const dbConnection = require('../../database/db_connection');

const getDataOfPost = () => {
  const sql = 'select users.username, posts.* from users right join posts on users.id = posts.user_id;\n;';
  return new Promise((resolve, reject) => {
    dbConnection.query(sql, (err, res) => {
      if (err) return reject(new TypeError('Error in DB getDataOfPost'));
      if (res.rows.length === 0) return reject(new TypeError('username not found'));
      resolve(res.rows);
    });
  });
};


module.exports = { getDataOfPost };
