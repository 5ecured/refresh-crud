import React from 'react'
import '../App.css'

const DisplayPlayers = ({ playersToDisplay }) => {
    const toDisplay = playersToDisplay.map(el => {
        return (
            <p key={el.id}>
                {el.name} - {el.club}
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