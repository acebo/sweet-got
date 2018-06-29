import React, { PureComponent } from 'react'

const FilterItem = ({ label, isSelected, onClickItem }) => (
  <li onClick={onClickItem}
      className={isSelected ? 'selected' : undefined}>
    <span>{label}</span>
  </li>
)

class FilterList extends PureComponent {
  state = {
    isOpen: false
  }

  onClickItem(itemId) {
    const { onSelectedItem = () => {} } = this.props
    const isOpen = !this.state.isOpen

    this.setState({
      isOpen
    })

    if(!isOpen) {
      onSelectedItem(itemId)
    }
  }

  render() {
    return (
      <div id={'filter-list'} className={this.state.isOpen ? 'open-menu' : undefined}>
        <ul>
          {
            this.props.items.map(item => <FilterItem
              key={`${item.Id}-${item.Name}`}
              label={item.Name}
              isSelected={this.props.selectedItemId === item.Id}
              onClickItem={() => this.onClickItem(item.Id)}
            />)
          }
        </ul>
      </div>
    )
  }
}

export default FilterList
