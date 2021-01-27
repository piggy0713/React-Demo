import React from 'react';
import './Person.css';



const person = (props) => {
 
  return (
    <div className="Person" >
      <p onClick={props.click}>My name is {props.name}.I am {props.age} years old.</p>
      <p>My favorite thing is eat {props.thingy}.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.thingy} />
    </div> 
  )
  
};

export default person;