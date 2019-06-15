import React from 'react'
import Song from './Song'
import Axios from 'axios'

const SingleAlbum = (props) => {
  const { selectedAlbum, playSong, pauseSong, songPlaying } = props

  return (
    <div id='single-album' className='container'>
      <div className='album'>
        <a>
          <img src='default-album.jpg' />
          <p>{selectedAlbum.name}</p>
          <small>{selectedAlbum.artist.name}</small>
        </a>
      </div>
      <table id='songs'>
        <tbody>
          <tr className='gray'>
            <td />
            <td>#</td>
            <td>Name</td>
            <td>Artist</td>
            <td>Genre</td>
          </tr>
          {selectedAlbum.songs.map(
            (song,idx) => {
              return <Song playSong={playSong} pauseSong={pauseSong} key={idx+1} artist={selectedAlbum.artist} song={song} songPlaying={songPlaying} />
            }
          )}
        </tbody>
      </table>
    </div>
  )

}

export default SingleAlbum
