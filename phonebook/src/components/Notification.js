import React from 'react'

function Notification({ message }) {
    console.log(message)
    if(message === ''){
        return null
    }
    return (
        <div className='error'>
            {message}
        </div>
    )
}

export default Notification
