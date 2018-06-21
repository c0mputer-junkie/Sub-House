const cheerio = require('cheerio');
const fetch = require ('node-fetch');
// web scraping craiglist sub and temporary housing

const url = 'https://sfbay.craigslist.org/search/eby/sub?hasPic=1&search_distance=1&postal=94608&min_price=600&max_price=1000&availabilityMode=0&sale_date=all+dates';

function searchListings (searchTerm) {
  return fetch(`${url}${searchTerm}`)
  .then(response => response.text())
  .then(body => {
    const listings = [];
    const $ = cheerio.load(body);
   $('li.result-row').each(function(i, element){
      const $element = $(element);
      const listingsId = i+1;
      const $title = $element.find('.result-title').text();
      const $price = $element.find('.result-price').text();
      const $location = $element.find('.result-hood').text();
      const $link = $element.find('a').attr('href');

      //create a listing object to save listing info
      const listing = {
        id: listingsId,
        title: $title,
        price: $price,
        location: $location,
        link: $link
      };
      listings.push(listing);

    })
    return listings;
  })
}

module.exports = {
  searchListings
}
