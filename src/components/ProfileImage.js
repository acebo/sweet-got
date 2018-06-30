import React, { PureComponent } from 'react'
import image from './../assets/profile-pic.jpg'

class ProfileImage extends PureComponent {
  render() {
    const { name } = this.props
    return (
      <div className={"profile-image"}>
        <img src={ image } alt={ name } />
      </div>
    )
  }
}

export default ProfileImage
