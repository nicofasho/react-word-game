import React, { Component } from "react";

class PriorGuesses extends Component {
  state = {};
  render() {
    return (
      <div>
        <p className="miss-row-text">
          {this.props.missRow ? this.props.missRow : null}
        </p>
      </div>
    );
  }
}

export default PriorGuesses;
