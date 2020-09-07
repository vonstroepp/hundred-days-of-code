import React from 'react'

function PersonForm({ addName, newName, handleNameChange, newNumber, handleNumberChange }) {
    return (
        <form onSubmit={addName}>
            <div>
                Enter a new Name: <input value={ newName } onChange={ handleNameChange }/>
            </div>
            <div>
                Enter a new Number: <input value={ newNumber } onChange={ handleNumberChange }/>
            </div>
            <div>
                <button type="submit">Add a new person</button>
            </div>
        </form>
    )
}

export default PersonForm
