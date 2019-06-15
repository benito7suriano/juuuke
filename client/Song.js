import React from 'react'

const Song = (props) => {
  const { i, artist, song, playSong, songPlaying, pauseSong } = props
  const { id, name, audioUrl, genre } = song

  return (
    <tr className={
      songPlaying.id !== song.id
      ? '' : 'active'
    }>
      <td>
        {
          songPlaying.id !== song.id
           ? <i className='fa fa-play-circle' onClick={() => playSong(song)} />
           : <i className='fa fa-pause-circle' onClick={() => pauseSong(song)} />
        }
      </td>
      <td>{i}</td>
      <td>{name}</td>
      <td>{artist.name}</td>
      <td>{genre}</td>
    </tr>
  )
}

export default Song
