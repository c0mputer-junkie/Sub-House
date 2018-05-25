import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';



// web scraping craiglist sub and temporary housing 
const request = require('request');
const cheerio = require('cheerio');

const images = []
request(`https://sfbay.craigslist.org/search/eby/sbw`,(err, result, html) =>{
  if(!err && result.statusCode === 200) {
    var $ = cheerio.load(html);
    $('img', 'ul.rows').each(function(){
      $(this).attr('src');
      images.push('img');
    });
    console.log(images);
  }
});



ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
