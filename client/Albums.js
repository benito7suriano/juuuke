import React from 'react'
import Album from './Album'

const Albums = (props) => {
  const { albums, goToAlbum } = props

  return (
    <div className='container'>
      <div id='albums' className='row wrap'>
        { albums.map(album => <Album key={album.id} goToAlbum={goToAlbum} album={album} /> )}
      </div>
    </div>
  )
}

export default Albums
