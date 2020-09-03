import React from 'react'
import Course from './Components/Course';

function App({courses}) {
  console.log(courses);
  return (
    <div>
      <Course courses={ courses[0]} />
      <Course courses={ courses[1]} />
    </div>
  )
}

export default App
