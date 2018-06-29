import React from 'react'
import image from './../assets/profile-pic.jpg'

const ProfileImage = ({ name }) => (
  <div className={"profile-image"}>
    <img src={ image } alt={ name } />
  </div>
)

export default ProfileImage
