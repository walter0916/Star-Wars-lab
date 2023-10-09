import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getStarshipDetails } from "../services/api-calls"
import { Link } from "react-router-dom"
import './Starship.css'

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const starshipId = useParams().id

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipDetailsData = await getStarshipDetails(starshipId)
      setStarshipDetails(starshipDetailsData)
    }
    fetchStarshipDetails()
  }, [starshipId])

console.log(starshipDetails)
  if (!starshipDetails.length) return <h1>Loading...</h1>
  return (
    <main className="Starship-details">
      <h2>Name: {starshipDetails.name}</h2>
      <h2>Model: {starshipDetails.model}</h2>
      <h2>Manufacturer: {starshipDetails.manufacturer}</h2>
      <h2>Length: {starshipDetails.length}</h2>
      <h2>Crew: {starshipDetails.crew}</h2>
      <h2>Passengers: {starshipDetails.passengers}</h2>
      <h2>Cargo Capacity: {starshipDetails.cargo_capacity}</h2>
      <h2>Consumables: {starshipDetails.consumables}</h2>
      <h2>Hyperdrive Rating: {starshipDetails.hyperdrive_rating}</h2>
      <h2>Starship Class: {starshipDetails.starship_class}</h2>
      <Link to={'/'}>Return</Link>
    </main>
  )
}
export default StarshipDetails