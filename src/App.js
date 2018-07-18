import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { name: 'Vladimir', age: 30 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }>My hobbies: Racing</Person>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
