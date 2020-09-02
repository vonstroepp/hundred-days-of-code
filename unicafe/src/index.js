import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  
  const handleGoodClick = () => {
    setGood(good+1);
    setAll(all+1);
    setAverage(good+0-bad/3);
    setPositive(()=>{
      let outOff = all;
      let value = good;
      let result = (value * 100) / outOff;
      return result      
    });
  }
  console.log(positive)

  const handleBadClick = () => {
    setBad(bad+1);
    setAll(all+1);
    setAverage(good+0-bad/3)
    setPositive(()=>{
      let outOff = good+neutral+bad;
      let value = good;
      let result = (value * 100) / outOff;
      return result
    });
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1);
    setAll(all+1);
    setAverage((good+0-bad)/3)
    setPositive(()=>{
      let outOff = good+neutral+bad;
      let value = good;
      let result = (value * 100) / outOff;
      return result
    });
  }

  /*
    let outOff = good+neutral+bad;
    let value = good;
    let result = (value * 100) / outOff;
  */
  
  return (
    <div>
      <h2>Give Feedback</h2>
      <div>
        <button onClick={ handleGoodClick }>Good</button>
        <button onClick={ handleNeutralClick }>Neutral</button>
        <button onClick={ handleBadClick }>Bad</button>
      </div> 
      <h2>Statistics</h2>
      <div>
        <div>Good: { good }</div>
        <div>Neutral: { neutral }</div>
        <div>Bad: { bad }</div>
        <div>All: { all }</div>
        <div>Average: { average }</div>
        <div>Positive: { positive }</div>
      </div> 
    </div>
  )

  

  
}  
  ReactDOM.render(<App />, 
    document.getElementById('root')
)

