import React from 'react'
import '../App.css'

const DisplayPlayers = ({ playersToDisplay, deletePlayerFunction, whichPlayerToEdit }) => {
    const toDisplay = playersToDisplay.map(el => {
        return (
            <p key={el.id}>
                {el.name} - {el.club}
                <button onClick={() => whichPlayerToEdit(el)}>Edit</button> 
                <button onClick={() => deletePlayerFunction(el.id)}>Delete</button>
            </p>
        )
    })

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Players</h3>
            {toDisplay}
        </div>
    )
}

export default DisplayPlayers