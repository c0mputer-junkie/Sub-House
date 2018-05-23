const express = require('express');
const mysql = require("mysql");
const app = express();

// create a connection SQL
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "sub-house"
});

// Connect SQL
connection.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('MySql connected');
});

app.get('/', (req, res) => {

  var post = {first_name: 'ashley', last_name: 'addison', email: 'foo@gmail.com'};

    connection.query("INSERT INTO users SET ?", post, function(err, results, fields) {
      if (err) throw err;
      console.log(results);
      res.send('inserted into database');
    });
});

// create a Port
 const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
