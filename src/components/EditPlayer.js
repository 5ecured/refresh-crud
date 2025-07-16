import React, { useState } from 'react'

const EditPlayer = ({ setIsEditing, playerBeingEdited, editPlayerFunction }) => {
    const [newPlayer, setNewPlayer] = useState(playerBeingEdited)

    const handleChange = e => {
        const { name, value } = e.target
        setNewPlayer({ ...newPlayer, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!newPlayer.name || !newPlayer.club) return
        editPlayerFunction(newPlayer, newPlayer.id)
        setIsEditing(false)
    }

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
                    name='club'
                    placeholder='Enter club name'
                    onChange={handleChange}
                    value={newPlayer.club}
                />
                <button>Edit player</button>
            </form>
        </div>
    )
}

export default EditPlayer