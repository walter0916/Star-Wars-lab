import { useState, useEffect } from 'react'
import './App.css'
import StarshipList from './pages/StarshipList'
import StarshipDetails from './pages/StarshipDetails'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starships/:starshipId" element={<StarshipDetails/>} />
      </Routes>
    </>
  )
}

export default App
