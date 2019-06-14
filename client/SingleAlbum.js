import React from 'react'
import Song from './Song'
import Axios from 'axios'

export default class SingleAlbum extends React.Component {
  constructor(props) {
    super()
    this.state = {
      album: {}
    }
    this.selectedAlbum = props.selectedAlbum
  }

  async componentDidMount() {
    try {
      const res = Axios.get(`/api/albums/${this.selectedAlbum.id}`)
      const album = res.data

      this.setState({ album })
    } catch (error) {
      console.log(`Error retreiving album data: ${error}`)
    }
  }

  render() {
    const { selectedAlbum, playSong, pauseSong, songPlaying } = this.props

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
              song => {
                return <Song playSong={playSong} pauseSong={pauseSong} key={song.id} artist={selectedAlbum.artist} song={song} songPlaying={songPlaying} />
              }
            )}
          </tbody>
        </table>
      </div>
    )
  }
}


