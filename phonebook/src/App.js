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
    console.log(event.target.value)
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
    setPersons(persons.concat(personObject))
    setNewPerson('')
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.important === true)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <button onClick={ () => setShowAll( !showAll ) }>
          Show { showAll ? 'important' : 'all' } 
        </button>
      </div>
      <ul>
        { personsToShow.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
      <form onSubmit={addPerson}>
        <div>
          person: <input value={newPerson} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App