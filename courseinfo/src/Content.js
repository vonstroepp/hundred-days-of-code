import React from 'react';
import Part from './Part';

const Content = ({parts}) => {

    return(
        <div>
        <h2>Exercises: </h2>
        {parts.map((prop, key) => (
             <Part key={prop.name} part={prop.name} exercises={prop.exercises}/>
        ))}
        </div>
    )
}

export default Content;

