import React from 'react'

function Course({ course }) {
    return (
        <div>
          {course.parts.map(part =>
            <div key = { part.id }>
              { part.name }: { part.exercises } 
            </div> 
          )}
        </div>   
    )
}

export default Course
