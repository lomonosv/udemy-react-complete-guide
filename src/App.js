import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    persons: [
        { id: 'asfa1', name: 'Vladimir', age: 30 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf1', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other state',
    showPersons: false,
    enteredValue: ''
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);

        this.setState({
            persons: persons
        });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  changeInputFieldHandler = (event) => {
      this.setState({
          enteredValue: event.target.value
      });
  };

  removeCharHandler = (index) => {
    const enteredValue = [...this.state.enteredValue];
    enteredValue.splice(index, 1);

    this.setState({
        enteredValue: enteredValue.join('')
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
        persons = (
          <div>
            { this.state.persons.map((person, index) => {
                return <Person
                  click={ this.deletePersonHandler.bind(this, index) }
                  name={ person.name }
                  age={ person.age }
                  key={ person.id }
                  changed={ event => this.nameChangedHandler(event, person.id) }/>
            }) }
          </div>
        );
    }

    let charList = (
      <div>
        { this.state.enteredValue.split('').map((char, index) => {
          return <Char
            click={ this.removeCharHandler.bind(this, index) }
            letter={ char }
            key={ index }/>
        }) }
      </div>
    );

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <input
          type="text"
          onChange={ event => this.changeInputFieldHandler(event) }
          value={ this.state.enteredValue }/>
        <p>{ this.state.enteredValue.length }</p>
        { charList }
        <Validation textLength={ this.state.enteredValue.length }/>
        <button
          style={ style }
          onClick={ this.togglePersonsHandler }>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
