import React from 'react'

function CountryCard({country}) {
    return (
        <div key={ country.alpha2Code }>
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
    )
}

export default CountryCard
