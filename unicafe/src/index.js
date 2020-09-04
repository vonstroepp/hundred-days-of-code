import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0,0,0,0,0,0]);
  const [highestVote, setHighestVote] = useState(0);

  // {
  //    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 
  // }

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
  
  const handleShowRandomAnecdote = () => {
    const len = anecdotes.length;
    let randomNum = Math.floor(Math.random()*len);
    setSelected(randomNum);
  }
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
  
  const handleVote = () => {
    const newVotes = [ ...votes ]
    newVotes[selected] += 1
    setVotes(newVotes)
    voteHighest()
  }
  
  const voteHighest = () => {
    const asc =(a,b) => b-a;
    const highVotes = [...votes]
    // highVotes.sort(asc);
    // let highVote = highVotes[0]+1;
    // setHighestVote(highVote);
    console.log((highVotes).reduce((a, b) => highVotes[a] > highVotes[b] ? a : b))
  }
  
  return (
    <div>
    <Anecdotes highestVote = { highestVote } numOfVotes = { votes[selected] } handleVote = {handleVote} anecdotes = {anecdotes } selected= { selected } clickHandler = { handleShowRandomAnecdote } text="Show Random Anecdote"/>
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

  const Button = ({handleClick, text}) => (
    <button onClick = {handleClick}>
      {text}
    </button>
  )

  const Anecdotes = (props) => {
    console.log('phn',props.highestVote);
    return (
      <div>
        <Button handleClick = { props.clickHandler } text = { props.text }/>
        <Anecdote highestVote = {props.highestVote} numOfVotes = {props.numOfVotes} handleVote = {props.handleVote} anecdotes = { props.anecdotes } selected = { props.selected } />
      </div>
    )
  }

  const Anecdote = ({highestVote, numOfVotes, handleVote, anecdotes, selected}) => (
    <div>
      <p>{ anecdotes[selected] } <code> has { numOfVotes } votes</code></p>
      <Button handleClick = { handleVote } text="vote"/>
      <div>{ anecdotes[highestVote] }</div>
    </div>
  )
  

  ReactDOM.render(<App />, 
    document.getElementById('root')
)

