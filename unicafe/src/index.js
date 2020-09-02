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
        <Button handleClick = { handleGoodClick } text="Good"/>
        <Button handleClick = { handleNeutralClick } text="Neutral"/>
        <Button handleClick = { handleBadClick } text="Bad"/>
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

  const Statistics = ({good, neutral, bad, all, average, positive}) => {

    if(all === 0){
      return( <div>No feedback given</div>)
    } 

    return(
      <div>
        <h2>Statistics</h2>
        <Statistic text="Good" stat={ good } />
        <Statistic text="Neutral" stat={ neutral } />
        <Statistic text="Bad" stat={ bad } />
        <Statistic text="All" stat={ all } />
        <Statistic text="Average" stat={ average } />
        <Statistic text="Positive" stat={ positive } />
      </div>
    )
  }

  const Statistic = ({text, stat}) => (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{ text }:</td>
            <td>{ stat }</td>          
          </tr>
        </tbody>
      </table>
    </div>
  )

  const Button = (props) => (
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
  )

  ReactDOM.render(<App />, 
    document.getElementById('root')
)

