import React from 'react'

 function Numbers ({  person, deleteName }) {

    return  ( 
            <div>
                <div>Name: { person.name }, Number: {person.number}</div> 
                <button onClick={ () => deleteName(person) }>Delete</button>
            </div>
        )
    };

 export default Numbers;