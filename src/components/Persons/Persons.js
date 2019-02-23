import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component{

  // static getDerivedStateFromProps(props,state){
  //   console.log('[Persons.js] getDerivedStateFromProps', props);
  //   return state
  // } 

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps:', props);
  // } old one

  // componentWillUpdate(){

  // } old version

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message:'snapshot'}
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[Persons.js] componentDidUpdate:', snapshot)
  }

  render(){
    return this.props.persons.map( ( person, index ) => {
      console.log('[Persons.js] rendering..')

      return <Person
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={( event ) => this.props.changed( event, person.id )} />
    } )
  }
}


// const Persons = (props) => props.persons.map((person,index) => {
//   return <Person
//   click={() => props.clicked( index )}
//   name={person.name}
//   age={person.age}
//   key={person.id}
//   changed={( event ) => props.changed( event, person.id )} />

// });


export default Persons;