import React, { Component } from "react";

class GuessRow extends Component {
  state = {};

  render() {
    return (
      <div>
        {this.props.guessRow ? null : (
          <button
            className="btn btn-primary d-block mx-auto"
            onClick={this.props.startGame}
          >
            Start Game
          </button>
        )}
        {this.props.checkVictory() ? (
          <button
            className="btn btn-primary d-block mx-auto"
            onClick={this.props.startGame}
          >
            Play Again
          </button>
        ) : null}
        {this.props.checkLoss() && this.props.guessesLeft > -1 ? (
          <>
            <button
              className="btn btn-primary d-block mx-auto"
              onClick={this.props.startGame}
            >
              Try Again
            </button>
            <p>The word you were guessing was {this.props.secretWord}</p>
          </>
        ) : null}
        {this.props.guessRow ? (
          <p className="text-center guess-text">{this.props.guessRow}</p>
        ) : null}
      </div>
    );
  }
}

export default GuessRow;
