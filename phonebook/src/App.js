import React, { useState, useEffect } from 'react'
import Filter from './Filter';
import Numbers from './Numbers';
import PersonForm from './PersonForm';

const App = () => {

  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas', number: '212-867-5309', date: new Date().toISOString() },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523', date: new Date().toISOString() },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345', date: new Date().toISOString() },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122', date: new Date().toISOString() }
  ]) 

  const [newName, setNewName ] = useState('Firstname Lastname');
  const [newNumber, setNewNumber] = useState('555-5555');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  useEffect(() => {
    const results = persons.filter(person => person.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm])
  
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length +1,
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
    }
    const found = persons.find((element) => {
      return element.name === personObject.name
    });
    found ? alert(`${ personObject.name } 2.7'already exists`) : setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <h2>A Phonebook</h2>
      <Filter searchTerm={ searchTerm }
              handleSearchChange = { handleSearchChange }
      />
      <br />
      <PersonForm addName={ addName } 
                  newName={ newName } 
                  handleNameChange={ handleNameChange } 
                  newNumber = { newNumber }
                  handleNumberChange = {handleNumberChange}
      />          
      <h2>Numbers</h2>
      {searchTerm === '' ? 
        persons.map((person) => <Numbers key = {person.id} person={ person } date={ person.date }/>)
        :
        searchResults.map((person) => <Numbers key = {person.id} person={ person } date={ person.date }/>)
      }
    </div>
  )
}

export default App