import React, { useState, useEffect } from 'react'
import axios from 'axios';

function CountryCard({country}) {
    
    const weatherKey = 'YOUR API KEY HERE';
    let weatherQuery = country.capital;
    const weatherUrl = `http://api.weatherstack.com/forecast?access_key=${weatherKey}&query=${weatherQuery}`
    
    const [weather, setWeather] = useState({});
    const [weatherCity, setWeatherCity] = useState('')

    const weatherHook = () => {
        axios
        .get(weatherUrl)
        .then(response => {
            setWeatherCity(response.data.location.name)
            setWeather(response.data.current)
        })
    }
    useEffect(weatherHook, []);
    const foo = weather;
    const moo = weatherCity;
    console.log(foo.weather_icons, moo);
    
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
                <div>
                    <h3>Current weather in { country.capital }:</h3>
                    <div>Temperature: {weather.temperature}</div>
                    <div>Wind Speed: {weather.wind_speed}</div>
                    <img src={weather.weather_icons} alt={ country.name } width="150"/>

                </div>
            </div>
    )
}

export default CountryCard
