import React, { Component } from "react";

class Definition extends Component {
  state = {};

  render() {
    return (
      <div>
        {this.props.checkVictory() ||
        (this.props.checkLoss() && this.props.guessesLeft > -1) ? (
          <>
            <p className="text-center mt-5">
              The word you were guessing was {this.props.secretWord}
            </p>
            <p className="definition-text">{this.props.definition}</p>
          </>
        ) : null}
      </div>
    );
  }
}

export default Definition;
