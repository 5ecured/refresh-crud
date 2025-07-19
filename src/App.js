import React, { useState } from 'react'
import './App.css'
import DisplayPlayers from './components/DisplayPlayers'
import AddPlayer from './components/AddPlayer'
import EditPlayer from './components/EditPlayer'

const App = () => {
  const initialData = [
    {
      id: 1, name: 'cristiano ronaldo', country: 'portugal', important: true
    },
    {
      id: 2, name: 'lionel messi', country: 'argentina', important: false
    },
    {
      id: 3, name: 'novak djokovic', country: 'serbia', important: true
    },
    {
      id: 4, name: 'rafael nadal', country: 'spain', important: true
    },
    {
      id: 5, name: 'roger federer', country: 'swiss', important: false
    },
    {
      id: 6, name: 'fernando torres', country: 'spain', important: true
    },
    {
      id: 7, name: 'thierry henry', country: 'france', important: false
    },
    {
      id: 8, name: 'gianluigi buffon', country: 'italy', important: true
    },
  ]

  const [players, setPlayers] = useState(initialData)
  const [isEditing, setIsEditing] = useState(false)

  const initialPlayer = { id: null, name: '', country: '' }
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
    setPlayerBeingEdited({ id: player.id, name: player.name, country: player.country })
  }

  const editPlayerFunction = (editedPlayer, id) => {
    setIsEditing(false)
    const newArray = players.map(player => player.id === id ? editedPlayer : player)
    setPlayers(newArray)
  }

  const toggleImportant = (id) => {
    // find the index of the player that will be toggled
    const temp = [...players]
    let i = 0

    players.forEach((player, index) => {
      if (player.id === id) i = index
    })

    temp[i].important = !temp[i].important
    setPlayers(temp)
  }

  const toggleImportantAll = () => {
    let importantPlayers = 0

    players.forEach(player => {
      if (player.important) importantPlayers += 1
    })

    if (players.length !== importantPlayers) {
      const temp = players.map(player => (
        {
          id: player.id,
          name: player.name,
          country: player.country,
          important: true
        }
      ))
      setPlayers(temp)
    } else {
      const temp = players.map(player => (
        {
          id: player.id,
          name: player.name,
          country: player.country,
          important: false
        }
      ))
      setPlayers(temp) 
    }
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
        toggleImportant={toggleImportant}
        playersLength={players.length}
        toggleImportantAll={toggleImportantAll}
      />
    </>
  )
}

export default App