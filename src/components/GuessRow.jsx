import React, { Component } from "react";

class GuessRow extends Component {
  state = {};

  showButtons = () => {
    return (
      <div className="mx-auto text-center mb-5">
        <button
          className="btn btn-success"
          onClick={() => this.props.startGame(3)}
        >
          Easy
        </button>
        <button
          className="btn btn-warning mx-3"
          onClick={() => this.props.startGame(5)}
        >
          Medium
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.startGame(7)}
        >
          Hard
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.guessRow ? null : this.showButtons()}
        {this.props.checkVictory() ? this.showButtons() : null}
        {this.props.checkLoss() && this.props.guessesLeft > -1 ? (
          <>
            {this.showButtons()}
            
          </>
        ) : null}
        {this.props.guessRow ? (
          <p className="text-center guess-text mb-3">{this.props.guessRow}</p>
        ) : null}
      </div>
    );
  }
}

export default GuessRow;
