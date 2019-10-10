import React, { Component } from 'react';
import './App.css';
import wordService from './utils/wordService';
import Counter from "./components/Counter";
import GuessRow from "./components/GuessRow";
import PriorGuesses from "./components/PriorGuesses";
import LetterBoard from "./components/LetterBoard";

class App extends Component {
  state = {}

  getSecretWord = async () => {
    let secretWord = await wordService.getSecretWord();
    this.setState({ secretWord: secretWord.toUpperCase() });
  }


  setInitialGuessRow = () => {
    let guess = [];
    this.state.secretWord.split('').forEach((char, idx) => {
      guess.push({ letter: char, revealed: false });
    });
    this.setState({ guess });
  }

  setInitialLetters = () => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetArr = alphabet.split('');
    this.setState({ alphabet: alphabetArr });
  }

  async componentDidMount() {
    await this.getSecretWord();
    this.setInitialGuessRow();
    this.setInitialLetters();
  }

  checkGuess = g => {
    let guesses = this.state.guess;
    let newAlphabet = this.state.alphabet.filter(c => {
      return c !== g;
    });

    if (g in guesses) {
      guesses.forEach(char => {
        if (g === char.letter) {
          char.revealed = true;
        }
      });
    } else {

    }
    this.setState({ guess: guesses, alphabet: newAlphabet });
  }


  render() {
    return (
      <div className="container">
        <h1>React Word Game!</h1>
        <Counter />
        <GuessRow guess={this.state.guess} />
        <PriorGuesses />
        <LetterBoard alphabet={this.state.alphabet} checkGuess={this.checkGuess} />
        <p>{this.state.secretWord}</p>
      </div>
    );
  }
}

export default App;