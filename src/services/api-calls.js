

export async function getAllStarships(page) {
  const res = await fetch(`https://swapi.dev/api/starships?page=${page}`)
  return res.json()
}

export async function getStarshipDetails(starshipId) {
  const res = await fetch(`https://swapi.dev/api/starships/${starshipId}/`)
  return res.json()
}