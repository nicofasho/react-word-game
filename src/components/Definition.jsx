import React, { Component } from "react";

class Definition extends Component {
  state = {};

  render() {
    return (
      <div>
        {this.props.checkVictory() ||
        (this.props.checkLoss() && this.props.guessesLeft > -1) ? (
          <>
            {this.props.checkLoss() ? (
              <p className="text-center mt-5">
                The word you were guessing was {this.props.secretWord}
              </p>
            ) : null}

            <p className="definition-text">{this.props.definition}</p>
          </>
        ) : null}
      </div>
    );
  }
}

export default Definition;
