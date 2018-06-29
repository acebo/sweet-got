import React from 'react'
import ProfileImage from './ProfileImage'
import ProfileDetail from './ProfileDetail'

const CardItem = ({ style, isOpenMenuCard, onToggleCard, onDeleteItem, ...item }) => (
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

export default CardItem
