

export async function getAllStarships() {
  const res = await fetch('https://swapi.dev/api/starships/')
  return res.json()
}

export async function getStarshipDetails(starshipId) {
  const res = await fetch(`https://swapi.dev/api/starships/${starshipId}/`)
  return res.json()
}