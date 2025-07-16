import React, { useState } from 'react'
import './App.css'
import DisplayPlayers from './components/DisplayPlayers'
import AddPlayer from './components/AddPlayer'

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

  const addPlayer = (newPlayerObject) => {
    newPlayerObject.id = players.length + 1
    setPlayers([...players, newPlayerObject])
  }

  return (
    <>
      <h2 className='center'>Football CRUD with React hooks</h2>
      <hr />
      <AddPlayer addPlayer={addPlayer} />
      <DisplayPlayers playersToDisplay={players} />
    </>
  )
}

export default App