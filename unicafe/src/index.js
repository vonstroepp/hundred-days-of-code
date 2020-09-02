import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const calcAverage = function(a, b, c) {
    return (a + b + c) / 2 + ' %'
  }
  const average = calcAverage(good, neutral, bad);

  const calcPositive = function(all, good){
    var outOff = all;
    var value = good;
    var result = ((value * 100) / outOff) ;
    if(isNaN(result)) 
    {
      return result = 'Not calculated Yet'
    }
    return result + ' %';
  }
  
  const positive = calcPositive(all, good);

  
  const handleGoodClick = () => { 
    setGood(good+1);
    setAll(all+1);
  }

  const handleBadClick = () => {
    setBad(bad+1);
    setAll(all+1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1);
    setAll(all+1);
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <div>
        <button onClick={ handleGoodClick }>Good</button>
        <button onClick={ handleNeutralClick }>Neutral</button>
        <button onClick={ handleBadClick }>Bad</button>
      </div> 
      <Statistics good = { good } 
                  neutral = { neutral }
                  bad = { bad }
                  all ={ all }
                  average = { average }
                  positive = { positive }
                  />
    </div>
  )
}  

  const Statistics = (props) => {

    if(props.all === 0){
      return( <div>No feedback given</div>)
    } 

    return(
      <div>
        <h2>Statistics</h2>
        <div>
          <div>Good: { props.good }</div>
          <div>Neutral: { props.neutral }</div>
          <div>Bad: { props.bad }</div>
          <div>All: { props.all }</div>
          <div>Average: { props.average }</div>
          <div>Positive: {props.positive }</div>
        </div> 
      </div>
    )
  }

  ReactDOM.render(<App />, 
    document.getElementById('root')
)

