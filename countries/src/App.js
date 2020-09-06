import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const baseUrl = 'https://restcountries.eu/rest/v2/all';
  
  const hook = () => {
    axios
      .get(baseUrl)
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  }

  useEffect(hook, []);

  const handleSearchChange = (event) => { setSearchTerm(event.target.value) }
    useEffect(() => {
      const results = countries.filter(country => 
        country.name.toLowerCase().includes(searchTerm))
      setSearchResults(results)
    }, [searchTerm]);

  return (
    <div className="App">
      <div>
        <h3>Country Search</h3>
        <input placeholder="Search for a country" value={ searchTerm } type="text" onChange={ handleSearchChange }/>
      </div>
      <div>
        <h3>All Countries</h3>
        {
          searchTerm === ''
          ?
          countries.map(country => {
           return <div key={ country.alpha2Code }>Country: { country.name }</div>
          })
          :
          searchResults.length > 20 ?
            <div>Too many countries - please type in more to narrow search</div>
            :
            searchResults.map(country => {
              return <div key={ country.alpha2Code }>Search Results: {country.name}</div>
            })
        }
      </div>
      
    </div>
  )
}

export default App;
