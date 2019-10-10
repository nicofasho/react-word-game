import React, { Component } from 'react';

class Counter extends Component {
  render() { 
    return ( 
    <div>
      {(!this.props.checkLoss()) ? <h3>{this.props.guessesLeft + ' guesses left'}</h3> : null}
    </div>
     );
  }
}
 
export default Counter;