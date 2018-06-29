import characters from './characters.json'
import houses from './houses'
/* data credit: https://anapioficeandfire.com/ */

const LIMIT = 1000
const FAMOUS_HOUSE = [362, 378, 229] //stark, targaryen, lannister, tyrell

export const getFamousHouses = () => Promise.resolve(houses
.filter(house => FAMOUS_HOUSE.indexOf(house.Id) !== -1))

export const getAllCharacters = () => Promise.resolve(characters
.filter(character => !!character.Name).slice(0, LIMIT))

export const getCharacterByHouse = (houseId) => Promise.resolve(characters
.filter(character => !!character.Name && character.Allegiances.indexOf(houseId) !== -1)
.slice(0, LIMIT))
