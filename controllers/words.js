const request = require("request");

const secretBaseURL = "http://app.linkedin-reach.io/words";
const dictBaseURL =
  "https://dictionaryapi.com/api/v3/references/collegiate/json/";

const dictAPIKey = process.env.DICT_KEY;

function generateRandomWordSeed() {
  return Math.floor(Math.random() * 10000);
}

function getSecretWord(req, res) {
  let url = `${secretBaseURL}?difficulty=${
    req.difficulty
  }&start=${generateRandomWordSeed()}&count=1`;

  request({ url: url }, function(err, response, body) {
    if (err) return err;
    res.status(200).send(body);
  });
}

function getWordDefinition(req, res) {
  console.log(`req.word: ${req.params.word}`);
  let url = dictBaseURL + req.params.word + `?key=${dictAPIKey}`;

  request({ url: url }, function(err, response, body) {
    body = JSON.parse(body);
    if (err) return err;
    res.status(200).json(body);
  });
}

module.exports = {
  getSecretWord,
  getWordDefinition
};
