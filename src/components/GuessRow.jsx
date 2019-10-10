import React, { Component } from 'react';

class GuessRow extends Component {
  state = {}

  handleUpdateGuess = () => {
    let guessRow = this.props.guess.map(char => {
      if (char.revealed) {
        return char.letter;
      } else {
        return '_';
      }
    }).join('');

    this.setState({ guessRow });

  }

  render() {
    return (
      <div>
        <button className="btn btn-primary d-block" onClick={this.handleUpdateGuess}>Start Game</button>
      {(this.state.guessRow) ? <p className="text-center">{this.state.guessRow}</p> : null}
      </div>
    );
  }
}

export default GuessRow;