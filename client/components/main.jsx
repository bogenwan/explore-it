import React from 'react';

class App extends React.component {
  constructor () {
    super();
    this.state = {
      message: 'Welcome to Explore it!'
    };
  }

  render () {
    return (
      <div>{this.state.message}</div>
    );
  }
}

export default App;