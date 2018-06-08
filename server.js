const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const mysql = require("mysql")
const searchListings = require('./src/components/Listings/Listings')
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
      if(err)
      throw err;
      console.log('MySql connected');
    });


    // making a call to the router to get listings
    app.get('/listings', (req, res) => {
      searchListings.searchListings(req.params.title)
      .then(listings => {
        res.json(listings);
        let post = {title:" Chill sublet north of DT Oakland with Adorable Pupper 6/18-7/15", price:700, location: "west oakland", link: "https://sfbay.craigslist.org/eby/sub/d/chill-sublet-north-of-dt/6585480838.html"}
        let sql = "INSERT INTO listings SET ?"
        let query = connection.query(sql, post, (err, result) => {
          if(err)
            throw err;
            console.log(result);
            res.send('post 1')
        })

        // res.send({express: 'Hello from Express'});
      });
    });
