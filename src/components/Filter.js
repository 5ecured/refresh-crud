import React, { useState } from 'react'

const Filter = ({ filteredPlayer, setFilteredPlayer }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Filter players</h3>
            <input
                placeholder='Filter by name or country'
                onChange={e => setFilteredPlayer(e.target.value)}
                value={filteredPlayer}
            />
            <button onClick={() => setFilteredPlayer('')}>Clear filter</button>
        </div>
    )
}

export default Filter