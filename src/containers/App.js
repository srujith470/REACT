import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[APP.JS] constructor',props)
  }
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    title:'WELCOME TO REACT',
    otherState: 'some other value',
    showPersons: false,
    showCockpit:true
  }

  static getDerivedStateFromProps (props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  // componentWillMount(){
  //   console.log('APP.js componentWillMount old version')
  // }
  componentDidMount(){
    console.log('APP.js componentDidMount')
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('App.js shouldComponentUpdate')
    return true
  }
  componentDidUpdate(){
    console.log('APP.js componentDidUpdate')
  }
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    console.log('[App.js] render1', )
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (

      <div className={classes.App}>
        <button onClick={() => {
          this.setState({showCockpit:false})
        }}>RemoveCockpit</button>

        {
          this.state.showCockpit ? (
          <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        ):null
        }
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
