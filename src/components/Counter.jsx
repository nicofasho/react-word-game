import React, { Component } from "react";

class Counter extends Component {
  lossMessage = () => {
    if (this.props.checkLoss() && this.props.guessesLeft > -1) {
      return "You ran out of guesses, try again?";
    }
  };

  render() {
    return (
      <div>
        <h3>
          {!this.props.checkLoss()
            ? this.props.checkVictory()
              ? "You guessed the word!"
              : this.props.guessesLeft !== 1
              ? `${this.props.guessesLeft} guesses left`
              : `${this.props.guessesLeft} guess left!`
            : this.lossMessage()}
        </h3>
      </div>
    );
  }
}

export default Counter;
