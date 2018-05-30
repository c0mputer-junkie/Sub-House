const cheerio = require('cheerio');
const fetch = require ('node-fetch');
// web scraping craiglist sub and temporary housing

const url = 'https://sfbay.craigslist.org/search/sub?hasPic=1&search_distance=1&postal=94608&availabilityMode=0&sale_date=all+dates';

function searchListings (searchTerm) {
  return fetch(`${url}${searchTerm}`)
  .then(response => response.text());
}

const listings = []

searchListings('sub?hasPic=1&availabilityMode=0&sale_date=all+dates')
.then(body => {
  // console.log(jq);
  const $ = cheerio.load(body);
 $('li.result-row').each(function(i, element, link){
  const $element = $(element);
  const $title = $element.find('.result-title').text();
  const $price = $element.find('.result-price').text();
  const $location = $element.find('.result-hood').text();
  const $link = $element.find('a').attr('href');


  // console.log($element.text());
  // console.log('this is a $title:', $title);
  // console.log('this is the $price:', $price);
  // console.log('this is the $location:', $location);
  // console.log('this is the $link:', $link);
  // console.log('this is the image:', $image);

const listing = {
  title: $title,
  price: $price,
  location: $location,
  link: $link
}
listings.push(listing);
console.log(listings);

  })

})

module.export = {
  searchListings
}
