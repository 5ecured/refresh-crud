import React from 'react'
import '../App.css'

const DisplayPlayers = ({ playersToDisplay, deletePlayerFunction, whichPlayerToEdit, toggleImportant, playersLength, toggleImportantAll }) => {
    const toDisplay = playersToDisplay.map(el => {
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
            <h3>Showing all players ({playersLength})</h3>
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

export default DisplayPlayers