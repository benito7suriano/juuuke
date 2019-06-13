import React from 'react'
import Sidebar from './Sidebar'
import Albums from './Albums'
import SingleAlbum from './SingleAlbum'
import Player from './Player'
import Axios from 'axios'

const selectedAlbum = {
  'id': 3,
  'name': 'Chain React-ion',
  'artworkUrl': 'default-album.jpg',
  'artistId': 1,
  'artist': {
    'id': 1,
    'name': 'The Crash Test Dummies',
  },
  'songs': [
    {
      'id': 13,
      'name': 'Set Some State',
      'audioUrl': 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/01%20Shooting%20Star.mp3',
      'genre': 'Instrumental',
      'albumId': 2,
      'artistId': 1
    },
    {
      'id': 14,
      'name': 'State state state',
      'audioUrl': 'https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/01%20Shooting%20Star.mp3',
      'genre': 'Instrumental',
      'albumId': 2,
      'artistId': 1
    }
  ]
}

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await Axios.get('/api/albums')
      const albums = res.data

      this.setState({ albums })
    } catch (err) {
      console.log(`Error retrieving data: ${err} | ${err.message}`)
    }
  }

  render () {
    const { albums } = this.state

    return (
      <div id='main' className='row container'>
        {/* Sidebar */}
        <Sidebar />

        {/* Body */}
        {/* <Albums albums={ albums } /> */}
          <SingleAlbum selectedAlbum={ selectedAlbum } />

        {/* Player */}
        <Player />

      </div>
    )
  }
}
