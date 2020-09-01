import React from 'react';

export default function Total(props) {
   let exercises = 0; 
   props.parts.forEach((prop) =>{
      exercises = exercises + prop.exercises;
   })

   return (
       <div>
            <h4>Total:</h4>
            <p>Number of exercises: {exercises}</p>
       </div>
    )
}
