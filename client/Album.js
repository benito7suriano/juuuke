import React from 'react'

const Album = (props) => {
  const { album, goToAlbum } = props

  return (
    <div className='album'>
      <a>
        <img
          src={album.artworkUrl}
          onClick={() => goToAlbum(album.id)} />
        <p>{album.name}</p>
        <small>{album.artist.name}</small>
      </a>
    </div>
  )
}

export default Album
