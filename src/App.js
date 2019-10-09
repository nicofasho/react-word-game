import React, { Component } from 'react';
import './App.css';
import wordService from './utils/wordService';
import Counter from "./components/Counter";
import GuessRow from "./components/GuessRow";
import PriorGuesses from "./components/PriorGuesses";
import LetterBoard from "./components/LetterBoard";

class App extends Component {
  state = {  }

  getSecretWord = async () => {
    let secretWord = await wordService.getSecretWord();
    this.setState({secretWord: secretWord})
  }

  componentDidMount() {
    this.getSecretWord();
  }


  render() { 
    return ( 
    <div className="container">
      <h1>React Word Game!</h1>
      <Counter />
      <GuessRow />
      <PriorGuesses />
      <LetterBoard />
      <p>{this.state.secretWord}</p>
    </div>
     );
  }
}
 
export default App;