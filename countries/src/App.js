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
                return <div key={ country.alpha2Code }>Search Results: {country.name}</div>
              })
              :
              searchResults.map(country => {
                return <div key={ country.alpha2Code }>
                  <h3>{ country.name }</h3>
                  <img src={country.flag} alt={ country.name } width="150"/>
                  <div>Capital: { country.capital }</div>
                  <div>Population: { country.population }</div>
                  <div>Languages:</div>
                    <div>
                      {country.languages.map(language => {
                      return <div key={ language.iso639_1}>{language.name} ({ language.nativeName })</div>
                      })
                    }</div>
                </div>
              })
        }
      </div>
      
    </div>
  )
}

export default App;
