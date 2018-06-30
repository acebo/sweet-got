import React, { PureComponent } from 'react'

class ProfileDetail extends PureComponent {
  render() {
    const { id, name, aliases, bg } = this.props
    return (
      <div className={"profile-detail"} style={{backgroundColor: bg}}>
        <h2>{ id } { name }</h2>
        <div>{ aliases }</div>
      </div>
    )
  }
}

export default ProfileDetail
