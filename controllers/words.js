const request = require('request');

const baseURL = 'http://app.linkedin-reach.io/words';

function generateRandomWordSeed() {
  return Math.floor(Math.random() * 10000);
}


async function getSecretWord(req, res) {

  let url = baseURL + `?difficulty=8&start=${generateRandomWordSeed()}&count=1`

  request({
    url: url
  }, function (err, response, body) {
    if (err) return err;
    res.status(200).send(body);
  });
}


module.exports = {
  getSecretWord
};