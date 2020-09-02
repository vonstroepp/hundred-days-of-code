import React from 'react';

export default function Part({part, exercises}){
    return(
        <p>
             {part}: {exercises} exercises.
        </p>
    )
}