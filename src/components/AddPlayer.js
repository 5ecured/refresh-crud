import React, { useState } from 'react'

const AddPlayer = ({ addPlayer }) => {
    const initialPlayer = { id: null, name: '', club: '' }
    const [newPlayer, setNewPlayer] = useState(initialPlayer)

    const handleChange = e => {
        const { name, value } = e.target
        setNewPlayer({ ...newPlayer, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!newPlayer.name || !newPlayer.club) return
        addPlayer(newPlayer)
        setNewPlayer(initialPlayer)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Add a player</h3>
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
                <button>Add player</button>
            </form>
        </div>
    )
}

export default AddPlayer