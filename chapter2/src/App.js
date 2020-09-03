import React from 'react'
import Course from './Components/Course';

function App({course}) {
  return (
    <div>
      <h2>{course.name}</h2>
        <Course course={ course.parts} />
    </div>
  )
}

export default App
