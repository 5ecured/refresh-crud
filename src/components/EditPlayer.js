import React, { useState, useEffect } from 'react'

const EditPlayer = ({ setIsEditing, playerBeingEdited, editPlayerFunction }) => {
    const [newPlayer, setNewPlayer] = useState(playerBeingEdited)

    const handleChange = e => {
        const { name, value } = e.target
        setNewPlayer({ ...newPlayer, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!newPlayer.name || !newPlayer.country) return
        editPlayerFunction(newPlayer, newPlayer.id)
        setIsEditing(false)
    }

    useEffect(() => {
        setNewPlayer(playerBeingEdited)
    }, [playerBeingEdited])

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Editing a player</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter player name'
                    onChange={handleChange}
                    value={newPlayer.name}
                />
                <input
                    type='text'
                    name='country'
                    placeholder='Enter country'
                    onChange={handleChange}
                    value={newPlayer.country}
                />
                <button>Edit player</button>
            </form>
        </div>
    )
}

export default EditPlayer