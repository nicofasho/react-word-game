import React, { Component } from 'react';
import './App.css';
import wordService from './utils/wordService';

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
    <div>
      <h1>React Word Game!</h1>
      <p></p>
    </div>
     );
  }
}
 
export default App;