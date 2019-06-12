import React from 'react'
import Sidebar from './Sidebar'
import Albums from './Albums'
import Player from './Player'

const dummy = [
  {
    'id': 1,
    'name': 'No Dummy',
    'artworkUrl': 'default-album.jpg',
    'artistId': 1,
    'artist': {
      'id': 1,
      'name': 'The Crash Test Dummies'
    }
  },
  {
    'id': 2,
    'name': 'I React to State',
    'artworkUrl': 'default-album.jpg',
    'artistId': 1,
    'artist': {
      'id': 1,
      'name': 'The Crash Test Dummies'
    }
  }
]

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: []
    }
  }

  // async ComponentDidMount() {

  // }

  render () {
    return (
      <div id='main' className='row container'>
        {/* Sidebar */}
        <Sidebar />

        {/* Body */}
        <Albums albums={dummy} />

        {/* Player */}
        <Player />

      </div>
    )
  }
}
