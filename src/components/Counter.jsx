import React, { Component } from 'react';

class Counter extends Component {

  lossMessage = () => {
    if (this.props.checkLoss() && this.props.guessesLeft > -1) {
      return <h3>You ran out of guesses, try again?</h3>;
    }
  }

  victoryMessage = () => {
    if (this.props.checkVictory()) {
      return <h3>You guessed the word!</h3>;
    }
  }

  render() {
    return (
      <div>
        {(!this.props.checkLoss()) ? <h3>{this.props.guessesLeft + ' guesses left'}</h3> : null}
        {this.lossMessage()}
        {(this.props.checkVictory()) ? <h3>You guessed the word!</h3> : null}
      </div>
    );
  }
}

export default Counter;