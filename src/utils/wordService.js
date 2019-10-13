function getSecretWord(difficulty) {
  return fetch(`/api/secretword/${difficulty}`)
    .then(res => res.text())
    .catch(err => console.error(err));
}

function getWordDefinition(word) {
  return fetch(`/api/definition/${word}`)
    .then(res => res.json())
    .catch(err => console.error(err));
}

export default {
  getSecretWord,
  getWordDefinition
};
