import React from 'react';

export default function Part(props){
    return(
        <p>
             {props.part}: {props.exercises} exercises.
        </p>
    )
}