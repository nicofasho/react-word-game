import React, { Component } from "react";

class Counter extends Component {
  lossMessage = () => {
    if (this.props.checkLoss() && this.props.guessesLeft > -1) {
      return "You ran out of guesses, try again?";
    }
  };

  counterStyle = () => {
    return {
      fontSize:
        this.props.guessesLeft > 0
          ? this.props.guessesLeft < 3
            ? `${6 / this.props.guessesLeft}vh`
            : null
          : null
    };
  };

  counterText = () => {
    let guesses = this.props.guessesLeft;
    if (guesses === 6) return `${guesses} guesses left. Everything's all good!`;
    else if (guesses === 5) return `${guesses} guesses left. No sweat.`;
    else if (guesses === 4)
      return `${guesses} guesses. It's fine, don't panic.`;
    else if (guesses === 3)
      return `${guesses} guesses... Are we good? You got this? You sure???`;
    else if (guesses === 2) return `Oh jeez, oh boy, ${guesses} left!`;
    else if (guesses === 1)
      return `It's the END TIMES! We're FINISHED! It's all over! ${guesses} guess left!!!`;
  };

  render() {
    return (
      <div>
        <h3 style={this.counterStyle()}>
          {!this.props.checkLoss()
            ? this.props.checkVictory()
              ? "You guessed the word!"
              : this.counterText()
            : this.lossMessage()}
        </h3>
      </div>
    );
  }
}

export default Counter;
