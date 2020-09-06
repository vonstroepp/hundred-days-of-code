import React, { useState, useEffect } from 'react';
import personService from './services/persons';
import Filter from './Filter';
import Numbers from './Numbers';
import PersonForm from './PersonForm';

const App = () => {

  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const hook = () => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  };

  useEffect(hook, []);

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
    
    found ? alert(`${ personObject.name } already exists`) : 
    
    personService
    .createPerson(personObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
  }
  
  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  useEffect(() => {
    const results = persons.filter(person => person.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm])
  
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  
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
      <h2>Names and Numbers</h2>
      {searchTerm === '' ? 
        persons.map((person) => <Numbers key = {person.id} person={ person } />)
        :
        searchResults.map((person) => <Numbers key = {person.id} person={ person } date={ person.date }/>)
      }
    </div>
  )
}

export default App