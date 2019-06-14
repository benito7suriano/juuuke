import React from 'react'

const Song = (props) => {
  const { artist, song, playSong, songPlaying } = props
  const { id, name, audioUrl, genre } = song

  return (
    <tr>
      <td>
        {
          songPlaying.id !== song.id
           ? <i className='fa fa-play-circle' onClick={() => playSong(song)} />
           : <span></span>
        }
      </td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{artist.name}</td>
      <td>{genre}</td>
    </tr>
  )
}

export default Song
