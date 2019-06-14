import React from 'react'

const Song = (props) => {
  const { artist, playSong } = props
  const { id, name, audioUrl, genre } = props.song

  return (
    <tr>
      <td><i className='fa fa-play-circle' onClick={() => playSong()} /></td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{artist.name}</td>
      <td>{genre}</td>
    </tr>
  )
}

export default Song
