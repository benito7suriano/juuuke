import React from 'react'
import Song from './Song'
import Axios from 'axios'

export default class SingleAlbum extends React.Component {
  constructor() {
    super()
    this.state = {
      album: {}
    }
  }

  async componentDidMount() {
    try {
      const res = Axios.get(`/api/albums/${albumId}`)
      const album = res.data

      this.setState({ album })
    } catch (error) {
      console.log(`Error retreiving album data: ${error}`)
    }
  }

  render() {
    const { selectedAlbum } = this.props

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
                return <Song key={song.id} artist={selectedAlbum.artist} song={song} />
              }
            )}
          </tbody>
        </table>
      </div>
    )
  }
}


