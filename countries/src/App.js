import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CountryCard from './CountryCard';
import CountryResults from './CountryResults';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const baseUrl = 'https://restcountries.eu/rest/v2/all';

  const countriesHook = () => {
    axios
      .get(baseUrl)
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(countriesHook, []);

  const handleSearchChange = (event) => { setSearchTerm(event.target.value) }
    useEffect(() => {
      const results = countries.filter(country => 
        country.name.toLowerCase().includes(searchTerm))
      setSearchResults(results)
    }, [countries, searchTerm]);

  return (
    <div className="App">
      <div>
        <h3>Country Search</h3>
        <input placeholder="Search for a country" value={ searchTerm } type="text" onChange={ handleSearchChange }/>
      </div>
      <h3>SearchResults</h3>
      <div>
        {
          searchTerm === ''
          ?
          <div>No countries searched yet</div>
          :
          searchResults.length > 20 
            ?
            <div>Too many countries - please type in more to narrow search</div>
            :
              searchResults.length > 1
              ?
              searchResults.map(country => {
                  return <CountryResults key={ country.alpha2Code } country= { country } />
              })
              :
              searchResults.map(country => {
                return <CountryCard key={ country.alpha2Code } country={ country } />
              })
        }
      </div>
      
    </div>
  )
}

export default App;
