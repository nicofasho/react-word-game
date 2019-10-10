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


  setInitialGuessArray = () => {
    let guess = [];
    this.state.secretWord.split('').forEach((char, idx) => {
      guess.push({ letter: char, revealed: false });
    });
    let guessRow = guess.map(char => '_').join('');
    let missRow = '';
    let guessesLeft = 6;
    this.setState({ guess, guessRow, missRow, guessesLeft });
  }

  setInitialLetters = () => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetArr = alphabet.split('');
    this.setState({ alphabet: alphabetArr });
  }


  startGame = async () => {
    await this.getSecretWord();
    this.setInitialGuessArray();
    this.setInitialLetters();
  }

  buildGuessRow = (g, guessRow) => {
    this.state.guess.forEach(char => {
      if (g === char.letter) {
        char.revealed = true;
        guessRow.push(g);
      } else {
        if (char.revealed) {
          guessRow.push(char.letter);
        } else {
          guessRow.push('_');
        }
      }
    });
  }

  checkGuess = g => {
    let guesses = this.state.guess;
    let newAlphabet = this.state.alphabet.filter(c => {
      return c !== g;
    });
    let guessRow = [];
    let missRow = this.state.missRow;
    let guessesLeft = this.state.guessesLeft;

    if (this.state.secretWord.includes(g)) {
      this.buildGuessRow(g, guessRow);
    } else {
      missRow += g;
      guessesLeft -= 1;
      this.buildGuessRow(g, guessRow);
    }
    guessRow = guessRow.join('');
    this.setState({ guess: guesses, alphabet: newAlphabet, guessRow, missRow, guessesLeft });
  }


  render() {
    return (
      <div className="container">
        <h1>React Word Game!</h1>
        <Counter guessesLeft={this.state.guessesLeft} />
        <GuessRow guess={this.state.guess} guessRow={this.state.guessRow} startGame={this.startGame} />
        <PriorGuesses missRow={this.state.missRow} />
        <LetterBoard alphabet={this.state.alphabet} checkGuess={this.checkGuess} />
        <p>{this.state.secretWord}</p>
      </div>
    );
  }
}

export default App;