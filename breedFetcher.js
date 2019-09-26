const request = require('request');
let arg = process.argv.slice(2);
let breedType = arg[0];

const fetchBreed = function(breedType, callback) {
  request.get(`https://api.thecatapi.com/v1/breeds/search/?q=${breedType}`, (error, response, body) => {
    if (error) {
      console.log((error, null));
    }
    const breedInfo = JSON.parse(body)[0];
    if (breedInfo) {
      console.log(breedInfo.description);
    } else {
      console.log("this breed doesn't exist!");
    }
  });
};

fetchBreed(breedType);