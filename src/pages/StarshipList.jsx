import { useState, useEffect} from "react"
import { Link } from "react-router-dom"

import { getAllStarships } from "../services/api-calls"

import './Starship.css'

const StarshipList = (props) => {


if (!props.starshipList.length) return <h1>Loading...</h1>
  return (
    <main>
      <h1 className="title">Starships</h1>
      <div className="starship-container">
        {props.starshipList.map(starship => <div className="starship-link" key={starship._id}>
        <Link to={`/starships/${starship.url.match(/\d+/)}`} className="link">{starship.name}</Link>
        {console.log(starship.id)}
      </div> )}
      </div>
    </main>
  )
}

export default StarshipList