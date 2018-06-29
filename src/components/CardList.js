import React from 'react'
import CardItem from './CardItem'

const CardList = ({ items, onToggleCard, onDeleteItem, selectedCardId }) => (
  <div id={"card-list-container"}>
    <ul id={"card-list"}>
      {
        items
        .map((item, index) => <CardItem
          {...item}
          key={index}
          onToggleCard={onToggleCard}
          onDeleteItem={onDeleteItem}
          isOpenMenuCard={selectedCardId === item.Id}
        />)
      }
    </ul>
  </div>
)

export default CardList
