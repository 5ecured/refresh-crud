import React, { useState } from 'react'
import './App.css'
import DisplayPlayers from './components/DisplayPlayers'
import AddPlayer from './components/AddPlayer'
import EditPlayer from './components/EditPlayer'

const App = () => {
  const initialData = [
    {
      id: 1, name: 'cristiano ronaldo', club: 'real madrid'
    },
    {
      id: 2, name: 'lionel messi', club: 'barcelona'
    },
    {
      id: 3, name: 'novak djokovic', club: 'serbia'
    },
    {
      id: 4, name: 'rafael nadal', club: 'spain'
    },
    {
      id: 5, name: 'roger federer', club: 'swiss'
    },
  ]

  const [players, setPlayers] = useState(initialData)
  const [isEditing, setIsEditing] = useState(false)

  const initialPlayer = { id: null, name: '', club: '' }
  const [playerBeingEdited, setPlayerBeingEdited] = useState(initialPlayer)

  const addPlayerFunction = (newPlayerObject) => {
    newPlayerObject.id = players.length + 1
    setPlayers([...players, newPlayerObject])
  }

  const deletePlayerFunction = (id) => {
    const newArray = players.filter(p => p.id !== id)
    setPlayers(newArray)
  }

  const whichPlayerToEdit = (player) => {
    setIsEditing(true)
    setPlayerBeingEdited({ id: player.id, name: player.name, club: player.club })
  }

  const editPlayerFunction = (editedPlayer, id) => {
    setIsEditing(false)
    const newArray = players.map(player => player.id === id ? editedPlayer : player)
    setPlayers(newArray)
  }

  return (
    <>
      <h2 className='center'>Football CRUD with React hooks</h2>
      <hr />
      {isEditing ?
        <EditPlayer
          setIsEditing={setIsEditing}
          playerBeingEdited={playerBeingEdited}
          editPlayerFunction={editPlayerFunction}
        />
        :
        <AddPlayer addPlayerFunction={addPlayerFunction} />
      }
      <DisplayPlayers
        playersToDisplay={players}
        deletePlayerFunction={deletePlayerFunction}
        whichPlayerToEdit={whichPlayerToEdit}
      />
    </>
  )
}

export default App