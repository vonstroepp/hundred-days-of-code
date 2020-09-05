import React, { useState } from 'react'

const Person = (props) => (
  <div key= {props.person.id}>{props.person.person }</div>
)

const App = (props) => {
  const [ persons, setPersons ] = useState([
    { id: 1,  person: 'Arto Hellas', date: new Date().toISOString(), important: true }
  ]) 
  const [ newPerson, setNewPerson ] = useState('Firstname Lastname')
  const [showAll, setShowAll ] = useState(true)

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      person: newPerson,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length +1
    }
    
    const found = persons.find((element) => {
      return element.person === personObject.person
    });
    
    found ? alert('person already exists') : setPersons(persons.concat(personObject));
   
    setNewPerson('');
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.important === true);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <button onClick={ () => setShowAll( !showAll ) }>
          Show { showAll ? 'Show Important people only' : 'Show All people' } 
        </button>
      </div>
      <ul>
        { personsToShow.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
      <form onSubmit={addPerson}>
        <div>
          Enter a new Name: <input value={newPerson} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">Add a new person</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App