import React from 'react'
import { List } from 'react-virtualized'
import { memoizeWith, identity } from 'ramda'
import CardItem from './CardItem'

// memoized clientWidth and clientHeight
const getClientWidth = memoizeWith(identity, () => document.getElementById('root').clientWidth + 400)
const getClientHeight = memoizeWith(identity, () => document.getElementById('root').clientHeight)

const getCardItem = ({ onToggleCard, onDeleteItem, selectedCardId, style, ...item }) => (
  <CardItem {...item}
    key={`${item.Id}-${item.Name}`}
    style={style}
    onToggleCard={onToggleCard}
    onDeleteItem={onDeleteItem}
    isOpenMenuCard={selectedCardId === item.Id}
  />
)

const CardList = ({ items, ...props }) => (
  <div id={"card-list-container"}>
    <ul id={"card-list"}>
      <List
        width={getClientWidth()}
        height={getClientHeight()}
        rowHeight={232}
        rowCount={items.length}
        rowRenderer={rowProps => getCardItem({
          ...props,
          ...items[rowProps.index],
          style: rowProps.style
        })}
      />
    </ul>
  </div>
)

export default CardList
