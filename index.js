import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Welcome';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Click begin to see the magic unravel!!
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
