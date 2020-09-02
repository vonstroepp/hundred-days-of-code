import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);


  return (
    <div>
      <h2>Give Feedback</h2>
      <div>
        <button onClick={()=> setGood(good+1)}>Good</button>
        <button onClick={()=> setNeutral(neutral+1)}>Neutral</button>
        <button onClick={()=> setBad(bad+1)}>Bad</button>
      </div> 
      <h2>Statistics</h2>
      <div>
        <div>Good: { good }</div>
        <div>Neutral: { neutral }</div>
        <div>Bad: { bad }</div>
      </div> 
    </div>
  )

  
}  
  ReactDOM.render(<App />, 
    document.getElementById('root')
)

