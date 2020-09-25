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
    const updatedPersonObject = {
      ...personObject,
      number: newNumber
    }
    
    const found = persons.find((element) => {
      console.log('element', element,element.id)
      if(element.name === personObject.name){
        return element
      }
      return null
    });
    
    if (found){
      console.log('found', found)
      const message = `${found.id}, ${found.name} already exists in the phonebook. Do you want to update the pone number instead?`;
      window.confirm(message)
      ? 
      personService
        .updatePerson(found.id, updatedPersonObject)
          .then(console.log('upo', updatedPersonObject, personObject))
          .then(returnedPerson => {
            setPersons(persons.concat.length(returnedPerson))
            setNewNumber('')
          })
      :
      alert("Operation aborted by user")
    } else {
      personService
        .createPerson(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            console.log('ret2', returnedPerson)
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
  
  const updateName = (person) => {
    console.log('id', person.id)
  }  

  const deleteName = (person) => {
    const message = `Do you really want to delete ${person.name} ?`;
    window.confirm(message) 
    ?
    personService
    .deletePerson(person)
    .then(() => {
      const indexOfPerson = persons.indexOf(person)
      persons.splice(indexOfPerson, 1);
      setPersons(persons)

      setErrorMessage(
        `${person.name} has been removed from the phone book. ID: ${person.id}`
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
  const handleNumberChange = (event) => { 
    // const results = person.filter(person => person.name.toLowerCase())
    // console.log('hi', event.target)
    setNewNumber(event.target.value)
  };

  
  return (
    <div className="container">
      <h2>A Phonebook</h2>
      <Notification message={ errorMessage } />
      {<Filter searchTerm={ searchTerm }
              handleSearchChange = { handleSearchChange }
  />}
      <br />
      {<PersonForm addName={ addName } 
                  newName={ newName } 
                  handleNameChange={ handleNameChange } 
                  newNumber = { newNumber }
                  handleNumberChange = { handleNumberChange }
/>   }       
      <h2>Names and Numbers</h2>
      {searchTerm === '' ? 
        persons.map((person) => <Numbers key={person.id}  person={ person } updateName={() => updateName(person)} deleteName={() => deleteName(person)} />)
        :
        searchResults.map((person) => <Numbers key={person.id} person={ person } date={ person.date } updateName={() => updateName(person)} deleteName={() => deleteName(person)} />)
      }
    </div>
  )
}

export default App