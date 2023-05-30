// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  handleChange = (event) => {
    console.log('Entering password...');
  };

  render() {
    return (
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Keypad;