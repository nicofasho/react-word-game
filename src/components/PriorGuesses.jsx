import React, { Component } from 'react';

class PriorGuesses extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        {(this.props.missRow) ? this.props.missRow : null}
      </div>
     );
  }
}
 
export default PriorGuesses;