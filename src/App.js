import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person' ;



class App extends Component {
  state = {

    persons: [
      { id:'111',name: 'Lily', age: 22, thingy: 'pork' },
      { id:'222',name: 'Mimi', age: 14, thingy: 'sauce' }
    ],
    showPersons: false
  }


  thingyChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.thingy = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

  let persons = null; 


  if(this.state.showPersons){
    persons = (
      <div>
        {this.state.persons.map((person,index) => {
          return <Person
            click={this.deletePersonHandler.bind(this,index)} 
            name={person.name} 
            age={person.age} 
            thingy={person.thingy} 
            key={person.id}
            changed={(event)=>this.thingyChangeHandler(event,person.id)} />
        })}
        
      </div> 
    );
    style.backgroundColor = 'red';

  }

  const classes = [];
  if (this.state.persons.length <=2 ) {
    classes.push('red');
  }
  if (this.state.persons.length <= 1) {
    classes.push('bold');
  }
  
  return (
      <div className="App">
        <h1>hi, this is baby!</h1>
        <p className={classes.join(' ')}>I am a red thing!</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Switch thingy
        </button>
        {persons}
      </div>
  );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,"Piggy!!!"));
  }
}

export default App;
