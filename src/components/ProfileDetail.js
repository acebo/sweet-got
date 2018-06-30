import React from 'react'

const ProfileDetail = ({ id, name, aliases, bg }) => (
  <div className={"profile-detail"} style={{backgroundColor: bg}}>
    <h2>{ id } { name }</h2>
    <div>{ aliases }</div>
  </div>
)

export default ProfileDetail
