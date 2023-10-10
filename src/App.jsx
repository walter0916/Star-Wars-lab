import { useState, useEffect } from 'react'
import './App.css'
import StarshipList from './pages/StarshipList'
import StarshipDetails from './pages/StarshipDetails'
import { Routes, Route } from'react-router-dom'
import { getAllStarships } from './services/api-calls'

function App() {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarships()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<StarshipList starshipList={starshipList}/>} />
        <Route path="/starships/:starshipId" element={<StarshipDetails/>} />
      </Routes>
    </>
  )
}

export default App
