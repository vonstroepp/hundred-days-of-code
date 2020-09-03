import React from 'react'

function Course({courses}) {
    
    const parts = courses.parts;
    
    let totalExercises = parts.reduce((sum, part) =>  sum + part.exercises, 0);
    
    return (    
        <div>
            <h2>{courses.name}</h2>
            <div>
                {courses.parts.map(part =>
                    <div key = { part.id }>
                    { part.name }: { part.exercises } 
                    </div> 
                ) }
                <div>Total Exercises: { totalExercises }</div>
            </div>
        </div>   
    )
}

export default Course
