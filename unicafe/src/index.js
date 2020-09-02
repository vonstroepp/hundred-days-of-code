import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => { setClicks ({ ...clicks, good: clicks.good + 1 })}
  const handleNeutralClick = () => { setClicks ({ ...clicks, neutral: clicks.neutral + 1 })}
  const handleBadClick = () => { setClicks ({ ...clicks, bad: clicks.bad + 1 })}
  const allClicks = clicks.good + clicks.bad + clicks.neutral;
  const averageScore = (a,b,c) => c === 0 ? a : ((a + b - c) / 3);
  const percentageOfGoodClicks = (a,b) => {
    let result;
    if( !a ) { return result = "Not Defined" };
      let outOff = a+b;
      let value = a;
      result = (value * 100) / outOff;
    return result + ' %'
  }
  const percentage = percentageOfGoodClicks(clicks.good, clicks.bad);

  
  
  const average = averageScore(clicks.good, 0, clicks.bad);

  return (
    <div>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <div>
        <h2>Statistics:</h2>
        <div>Good: { clicks.good }</div>
        <div>Neutral: { clicks.neutral }</div>
        <div>Bad:{ clicks.bad }</div>
        <div>All: { allClicks }</div>
        <div>Average: { average }</div>
        <div>Percentage of good: { percentage }</div>
      </div>
    </div>
  )
}  
  ReactDOM.render(<App />, 
    document.getElementById('root')
)

