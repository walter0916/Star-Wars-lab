import { useState, useEffect} from "react"
import { Link } from "react-router-dom"

import { getAllStarships } from "../services/api-calls"
import Logo from '../assets/logo.svg'
import Starwars from '../assets/starwars.png'

import './Starship.css'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])
  const [currPage, setCurrPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships(currPage)
      setStarshipList(starshipData.results)
      setPageCount(Math.ceil(starshipData.count/10))
    }
    fetchStarships()
  }, [currPage])

  const handleIncreasePageCount = () => {
    setCurrPage(currPage + 1)
  }

  const handleDecreasePageCount = () => {
    setCurrPage(currPage - 1)
  }

if (!starshipList.length) return <h1>Loading...</h1>
  return (
    <main>
      <img src={Starwars} alt="" />
      <h1 className="title">STARSHIPS</h1>
      <img src={Logo} alt="" />
      <div className='paginationContainer'>
        {currPage > 1 && <h2 onClick={handleDecreasePageCount}>◄</h2>}
        <h2>page {currPage} of {pageCount}</h2>
        {currPage !== pageCount && <h2 onClick={handleIncreasePageCount}>►</h2>}
      </div>
      <div className="starship-container">
        {starshipList.map(starship => <div className="starship-link" key={starship._id}>
        <Link to={`/starships/${starship.url.match(/\d+/)}`} className="link">{starship.name}</Link>
        {console.log(starship.id)}
      </div> )}
      </div>
    </main>
  )
}

export default StarshipList