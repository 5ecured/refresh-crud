import React from 'react'
import data from '../data'
import '../App.css'

const DisplayPlayers = () => {
    const toDisplay = data.map(el => {
        return (
            <>
                <p key={el.id}>
                    {el.name} - {el.club}
                </p>
            </>
        )
    })

    return (
        <div style={{ textAlign: 'center' }}>
            {toDisplay}
        </div>
    )
}

export default DisplayPlayers