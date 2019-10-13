import React, { Component } from "react";

class Definition extends Component {
  state = {};

  render() {
    return (
      <div>{this.props.checkVictory() ? <p>{this.props.definition}</p> : null}</div>
    );
  }
}

export default Definition;
