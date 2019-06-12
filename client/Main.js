import React from 'react'
import Sidebar from './Sidebar'
import Albums from './Albums'
import Player from './Player'
import Axios from 'axios'

// const dummy = [
//   {
//     'id': 1,
//     'name': 'No Dummy',
//     'artworkUrl': 'default-album.jpg',
//     'artistId': 1,
//     'artist': {
//       'id': 1,
//       'name': 'The Crash Test Dummies'
//     }
//   },
//   {
//     'id': 2,
//     'name': 'I React to State',
//     'artworkUrl': 'default-album.jpg',
//     'artistId': 1,
//     'artist': {
//       'id': 1,
//       'name': 'The Crash Test Dummies'
//     }
//   }
// ]

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: []
    }
  }

  async componentDidMount() {
    console.log(`Component is mounted`)
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
        <Albums albums={ albums } />

        {/* Player */}
        <Player />

      </div>
    )
  }
}
