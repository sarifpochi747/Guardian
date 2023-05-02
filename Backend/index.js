const express = require("express");
const app = express();
const cors = require("cors")
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'mumin007',
  database: 'guardian'
});

app.get('/profile', function(req, res) {
  pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query('SELECT * FROM profiles', function (error, results, fields) {
      // When done with the connection, release it.
      connection.release();

      // Handle error after the release.
      if (error) throw error;

      // Send the results to the client
      res.send(results);
    });
  });
});

app.use(cors({
    origin:'*',
    methods:['GET', 'POST','PUT','DELETE'],
}));

app.listen(5000, () => console.log("Server is running"));
