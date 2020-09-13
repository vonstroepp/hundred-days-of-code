import React, { useState, useEffect } from 'react';
import personService from './services/persons';
import Filter from './components/Filter';
import Numbers from './components/Numbers';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';
import './App.css';

const App = () => {

  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  };

  useEffect(hook, []);

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    const found = persons.find((element) => {
      return element.name === personObject.name
    });
    
    if (found){
      
        alert(`${personObject.name} already exists in the phonebook.`)
      
 
    } else {
      personService
        .createPerson(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
        })
        .catch(e => {
          setErrorMessage(
            'Error adding Name'
          )
          setTimeout(() => {
            setErrorMessage('')
          }, 5000)
        })
      }
    }

  const deleteName = (person) => {
    const message = `Do you really want to delete ${person.name} ?`;
    window.confirm(message) 
    ?
    personService
    .deletePerson(person)
    .then(() => {
      setPersons(persons.filter(item => item.id !== person.id))
      setErrorMessage(
        `${person.name} has been removed from the phone book`
      )
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    })
    .catch(e => {
      setErrorMessage(
        'Could not remove contact'
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
    : 
    alert(`${person.name}: is not deleted from the pone book`)
  }
  
  

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  useEffect(() => {
    const results = persons.filter(person => person.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm, persons])
  
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  
  return (
    <div className="container">
      <h2>A Phonebook</h2>
      <Notification message={ errorMessage } />
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
        persons.map((person) => <Numbers key={person.id}  person={ person } deleteName={() => deleteName(person)} />)
        :
        searchResults.map((person) => <Numbers key={person.id} person={ person } date={ person.date } deleteName={() => deleteName(person)} />)
      }
    </div>
  )
}

export default App