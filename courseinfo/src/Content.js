import React from 'react';
import Part from './Part';

const Content = (props) => {

    return(
        <div>
        <h2>Exercises: </h2>
        {props.parts.map((prop, key) => (
             <Part key={prop.name} part={prop.name} exercises={prop.exercises}/>
        ))}
        </div>
    )
}

export default Content;

