import React, { Component } from "react";

class LetterBoard extends Component {
  state = {};

  generateLetters = () => {
    return this.props.alphabet.map((char, idx) => (
      <button
        onClick={() => this.props.checkGuess(char)}
        key={idx}
        className="btn btn-outline-primary letterboard-text"
      >
        {char}
      </button>
    ));
  };

  render() {
    return (
      <div className="text-center">
        {this.props.alphabet &&
        !this.props.checkLoss() &&
        !this.props.checkVictory()
          ? this.generateLetters()
          : null}
      </div>
    );
  }
}

export default LetterBoard;
