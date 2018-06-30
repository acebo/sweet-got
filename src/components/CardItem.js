import React, { Component } from 'react'
import ProfileImage from './ProfileImage'
import ProfileDetail from './ProfileDetail'

class CardItem extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.isOpenMenuCard !== nextProps.isOpenMenuCard
  }

  render() {
    const { style, isOpenMenuCard, onToggleCard, onDeleteItem, ...item } = this.props
    return (
      <li style={style}
          className={isOpenMenuCard ? 'open-menu' : undefined}
          onClick={() => onToggleCard(item.Id)}>
        <div className={"card-menu"} onClick={(e) => {
          onDeleteItem(item.Id)
          e.stopPropagation()}}
        >
          <div className={"delete-button"}>X Delete</div>
        </div>
        <div className={"card-item"}>
          <ProfileImage src={item.ProfileImage} name={item.Name} />
          <ProfileDetail name={item.Name} aliases={item.Aliases.join(', ')} />
        </div>
      </li>
    )
  }
}

export default CardItem
