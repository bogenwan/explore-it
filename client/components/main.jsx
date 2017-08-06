import React from 'react';

class App extends React.Component {
  constructor (prop) {
    super(prop);

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