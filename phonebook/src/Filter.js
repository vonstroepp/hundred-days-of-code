import React from 'react'

function Filter({ searchTerm, handleSearchChange}) {
    return (
        <div>
            <h4>Type to search for a name</h4>
            <input placeholder="type in lower caps" 
                   onChange={ handleSearchChange } 
                   value={ searchTerm }/>
        </div>
    )
}

export default Filter
