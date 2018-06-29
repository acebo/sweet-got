import React, { Component } from 'react'
import './styles/App.css'
import { getFamousHouses, getAllCharacters, getCharacterByHouse } from './mock-data'
import CardList from './components/CardList'
import FilterList from './components/FilterList'

class App extends Component {
  state = {
    characters: [],
    houses: [],
    selectedHouseId: 0,
    toggleOpenMenu: false,
    selectedCardId: undefined,
  }

  getFilterListByHouseId = houseId => this.filterListByHouseId(houseId)
  getToggleCard = cardId => this.toggleCard(cardId)
  getDeleteCharacter = cardId => this.deleteCharacter(cardId)

  componentDidMount() {
    Promise.all([
      getAllCharacters(),
      getFamousHouses()
    ])
    .then(([ characters, houses ]) => {
      this.setState({
        characters,
        houses: [
          {
            Id: '',
            Name: '1000 rows'
          },
          ...houses
        ],
        selectedHouseId: ''
      })
    })
  }

  toggleCard(cardId) {
    this.setState({
      selectedCardId: this.state.selectedCardId === cardId ? undefined : cardId
    })
  }

  filterListByHouseId(houseId) {
    // just quick filter
    // if houseId is empty string, it will call get all characters function.
    const filterCharacters = houseId ? () => getCharacterByHouse(houseId) : getAllCharacters

    filterCharacters()
    .then((characters) => {
      this.setState({
        characters,
        selectedHouseId: houseId,
        toggleOpenMenu: !this.state.toggleOpenMenu,
        selectedCardId: undefined
      })
    })
  }

  deleteCharacter(characterId) {
    this.setState({
      characters: this.state.characters.filter(character => character.Id !== characterId),
      selectedCardId: undefined
    })
  }

  render() {
    return (
      <div className="App">
        <FilterList items={this.state.houses}
          selectedItemId={this.state.selectedHouseId}
          onSelectedItem={this.getFilterListByHouseId}
        />
        <CardList
          items={this.state.characters}
          selectedCardId={this.state.selectedCardId}
          onToggleCard={this.getToggleCard}
          onDeleteItem={this.getDeleteCharacter}
        />
      </div>
    )
  }
}

export default App
