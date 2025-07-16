import React from 'react'
import './App.css'
import DisplayPlayers from './components/DisplayPlayers'

const App = () => {
  return (
    <>
      <h2 class='center'>Football CRUD with React hooks</h2>
      <hr />
      <DisplayPlayers />
    </>
  )
}

export default App