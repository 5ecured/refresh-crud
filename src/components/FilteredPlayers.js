import React from 'react'
import '../App.css'

const FilteredPlayers = ({ playersToDisplay, deletePlayerFunction, whichPlayerToEdit, toggleImportant, playersLength, toggleImportantAll, filteredPlayer }) => {
    const displayFilteredPlayers = playersToDisplay.filter(player => (
        player.name.toUpperCase().includes(filteredPlayer.toUpperCase()) ||
        player.name.toLowerCase().includes(filteredPlayer.toLowerCase()) ||
        player.country.toUpperCase().includes(filteredPlayer.toUpperCase()) ||
        player.country.toLowerCase().includes(filteredPlayer.toLowerCase())

    ))

    const toDisplay = displayFilteredPlayers.map(el => {
        return (
            <tr key={el.id} style={{
                backgroundColor: el.important ? 'lightgreen' : ''
            }}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.country}</td>
                <td><button onClick={() => toggleImportant(el.id)}>Important</button></td>
                <td><button onClick={() => whichPlayerToEdit(el)}>Edit</button></td>
                <td><button onClick={() => deletePlayerFunction(el.id)}>Delete</button></td>
            </tr>
        )
    })

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Showing filtered players ({toDisplay.length})</h3>
            <button onClick={() => toggleImportantAll()}>Make all players important</button>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '20px' }}>
                <table>
                    <tr style={{ backgroundColor: 'black', color: 'white' }}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Important</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {toDisplay}
                </table>
            </div>
        </div>
    )
}

export default FilteredPlayers