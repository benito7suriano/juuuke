import React from 'react'
import Album from './Album'

const Albums = (props) => {
  const { albums } = props

  return (
    <div className='container'>
      <div id='albums' className='row wrap'>
        {albums.map(album => <Album key={album.id} album={album} />)}
      </div>
    </div>
  )
}

export default Albums
