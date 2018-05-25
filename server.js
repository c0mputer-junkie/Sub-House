const express = require('express');
const bodyparser = require ('body-parser');
const mysql = require("mysql");
const app = express();


// create a Port
 const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
app.set('PORT', PORT);

 // create a connection SQL
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password :"",
  database: "sub-house"
});

// Connect SQL
connection.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('MySql connected');
});
// insert user
app.get('/users', (req, res) => {

// function that handles users input

  function userInfo(first_name, last_name, email) {
    return {
      first_name: first_name,
      last_name: last_name,
      email: email
    }
  }

const post = userInfo('mr chow', 'lee', 'clee@gmail.com');
const newUser = userInfo('simi', 'holland', 'sholland@yahoo.com');

    connection.query("INSERT INTO users SET ?", post,  function(err, results, fields) {
      if (err)
        throw err;
      console.log(results);
      res.send(post);
    });
});

// select user(s)
app.get('/getuser', (req, res) => {
  let sql = "SELECT * FROM users";
  let query = connection.query(sql, (err, results) => {
    if(err)
      throw err;
      console.log(results);
      res.send(results);
  });
});
