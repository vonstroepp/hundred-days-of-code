import React from 'react'
import Course from './Components/Course';

function App({course}) {
  return (
    <div>
      <h2>{course.name}</h2>
        <Course course={ course} />
    </div>
  )
}

export default App
