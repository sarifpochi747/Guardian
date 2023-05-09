const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'tengu0630732106',
  //password: 'mumin007',
  database: 'guardian'
});

module.exports = pool.promise();
