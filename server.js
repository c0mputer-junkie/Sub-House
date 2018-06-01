const express = require('express');
// api request
const bodyparser = require ('body-parser');
const mysql = require("mysql");
const jq = require('jquery');
const searchListings = require('./src/components/Listings/Listings');
const app = express();


// // Key
// const Mapbox_Access_Token=process.env.Mapbox_Access_Token;

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
  if(err)
  throw err;
  console.log('MySql connected');
});

// insert user
app.get('/users', (req, res) => {

  // function that handles users input

  function userInfo(first_name, last_name, email) {
    return {
      first_name: res.first_name,
      last_name: res.last_name,
      email: res.email
    }
  }

  // dummy data to insert into db
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

app.get('/search', (req, res) => {
  res.json({
    message: 'scraping is fun'
  });
})


app.get('/search/title', (req, res) => {
  searchListings.searchListings(req.params.title)
  .then(listings => {
    console.log(listings);
    res.json(listings)
    // res.send({express: 'Hello from Express'});
  });
});
