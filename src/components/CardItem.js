import React, { Fragment, PureComponent } from 'react'
import { memoizeWith, identity, join } from 'ramda'
import ProfileImage from './ProfileImage'
import ProfileDetail from './ProfileDetail'

const CardItemLeft = ({ Id, onDeleteItem }) => (
  <div className={"card-menu"} onClick={(e) => {
    onDeleteItem(Id)
    e.stopPropagation()
  }}><div className={"delete-button"}>X Delete</div></div>
)

const CardItemRight = (item) => (
  <div className={"card-item"}>
    <ProfileImage src={item.ProfileImage} name={item.Name} />
    <ProfileDetail name={item.Name} aliases={join(', ')(item.Aliases)} bg={item.Color} />
  </div>
)

const getMemoizedCardItem = memoizeWith(identity, (id, item) => (
  <Fragment>
    <CardItemLeft {...item} />,
    <CardItemRight {...item} />
  </Fragment>
))

class CardItem extends PureComponent {
  render() {
    const { style, isOpenMenuCard, onToggleCard, ...item } = this.props
    return (
      <li style={style}
          className={isOpenMenuCard ? 'open-menu' : undefined}
          onClick={() => onToggleCard(item.Id)}>
        {
          getMemoizedCardItem(item.Id, item)
        }
      </li>
    )
  }
}

export default CardItem
