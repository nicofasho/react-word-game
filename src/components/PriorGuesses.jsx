import React, { Component } from "react";

class PriorGuesses extends Component {
  state = {};
  render() {
    return (
      <div>
          {this.props.missRow ? <p className="miss-row-text">Misses: {this.props.missRow}</p> : null}
      </div>
    );
  }
}

export default PriorGuesses;
