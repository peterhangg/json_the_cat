const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request.get(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(null, error);
    }
    const breedInfo = JSON.parse(body)[0];
    if (breedInfo) {
      callback(null, breedInfo.description.trim());
    } else {
      callback(null, "this breed doesn't exist!");
    }
  });
};

module.exports = { fetchBreedDescription };