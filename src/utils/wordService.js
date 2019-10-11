function getSecretWord() {
  return fetch("/api/secretword")
    .then(res => res.text())
    .catch(err => console.error(err));
}

export default {
  getSecretWord
};
