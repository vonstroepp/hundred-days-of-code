import React from 'react'

function Course({course}) {

    const totalExercises = course.reduce((sum, part) =>  sum + part.exercises, 0)

    return (
        <div>
          {course.map(part =>
            <div key = { part.id }>
              { part.name }: { part.exercises } 
            </div> 
          ) }
          <div>Total Exercises: { totalExercises }</div>
        </div>   
    )
}

export default Course
