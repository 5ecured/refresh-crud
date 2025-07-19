import React from 'react'
import '../App.css'

const DisplayPlayers = ({ playersToDisplay, deletePlayerFunction, whichPlayerToEdit, isImportant, setIsImportant }) => {
    const toDisplay = playersToDisplay.map(el => {
        // return (
        //     <p key={el.id}>
        //         {el.name} - {el.country}
        //         <button onClick={() => setIsImportant(!isImportant)}>Important</button>
        //         <button onClick={() => whichPlayerToEdit(el)}>Edit</button>
        //         <button onClick={() => deletePlayerFunction(el.id)}>Delete</button>
        //     </p>
        // )
        return (
            <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.country}</td>
                <td><button onClick={() => setIsImportant(!isImportant)}>Important</button></td>
                <td><button onClick={() => whichPlayerToEdit(el)}>Edit</button></td>
                <td><button onClick={() => deletePlayerFunction(el.id)}>Delete</button></td>
            </tr>
        )
    })

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Players</h3>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
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