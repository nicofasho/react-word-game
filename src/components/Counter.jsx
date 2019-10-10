import React, { Component } from 'react';

class Counter extends Component {
  render() { 
    return ( 
    <div>
      <h3>{(this.props.guessesLeft > 0) ? this.props.guessesLeft + ' guesses left' : null}</h3>
    </div>
     );
  }
}
 
export default Counter;