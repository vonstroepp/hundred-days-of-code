import React, {useState} from 'react'
import CountryCard from './CountryCard';


function CountryResults({ country }) {
    const [isExpanded, setisExpanded] = useState(false);

    const handleShowCountry = (event) => {
        setisExpanded(!isExpanded);
        } 
        
    return (
        <div>
            <div>
                <div>{country.name}</div>
                <button type="button" onClick={  handleShowCountry } >{isExpanded ? "Show Less" : "Show More"}</button>
            </div>
            {
            isExpanded ?
            <CountryCard country={ country } />
            :
            null
            }
        </div>
)
}

export default CountryResults
