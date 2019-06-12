import React from 'react'

const Album = (props) => {
  const { name } = props

  return (
    <div className='album'>
      <a>
        <img src='default-album.jpg' />
        <p>{name}</p>
        <small>Artist Name</small>
      </a>
    </div>
  )
}

export default Album
