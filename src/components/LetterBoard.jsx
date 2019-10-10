import React, { Component } from 'react';

class LetterBoard extends Component {
  state = {}

  generateLetters = () => {
    return this.props.alphabet.map((char, idx) => <button onClick={() => this.props.checkGuess(char)} key={idx} className="btn btn-outline-primary">{char}</button>);
  }

  render() {
    return (
      <div>
        {(this.props.alphabet) ? this.generateLetters() : null}
      </div>
    );
  }
}

export default LetterBoard;