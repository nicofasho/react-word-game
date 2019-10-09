import React, { Component } from 'react';

class LetterBoard extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <button className="btn btn-outline-primary">A</button>
        <button className="btn btn-outline-primary">A</button>
        <button className="btn btn-outline-primary">A</button>
        <button className="btn btn-outline-primary">A</button>
        <button className="btn btn-outline-primary">A</button>
        <button className="btn btn-outline-primary">A</button>
      </div>
     );
  }
}
 
export default LetterBoard;