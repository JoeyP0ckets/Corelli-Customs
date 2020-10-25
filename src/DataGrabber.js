import guitars from './GuitarData.json'

export function getAllGuitars() {
  return guitars.map(guitar => guitar)
}