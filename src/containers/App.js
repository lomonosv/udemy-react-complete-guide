import React, { Component } from 'react';

import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
        { id: 'asfa1', name: 'Vladimir', age: 30 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf1', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other state',
    showPersons: false
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

  render() {
    let persons = null;

    if (this.state.showPersons) {
        persons = <Persons
          persons={ this.state.persons }
          clicked={ this.deletePersonHandler }
          changed={ this.nameChangedHandler }/>;
    }

    return (
      <div className={ classes.App }>
        <Cockpit
          appTitle={ this.props.title }
          showPersons={ this.state.showPersons }
          persons={ this.state.persons }
          clicked={ this.togglePersonsHandler }/>
        { persons }
      </div>
    );
  }
}

export default App;
