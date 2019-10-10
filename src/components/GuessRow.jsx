import React, { Component } from 'react';

class GuessRow extends Component {
  state = {}

  render() {
    return (
      <div>
        {(this.props.guessRow) ? null : <button className="btn btn-primary d-block" onClick={this.props.startGame}>Start Game</button>}
        {(this.props.guessRow) ? <p className="text-center">{this.props.guessRow}</p> : null}
      </div>
    );
  }
}

export default GuessRow;