import React from 'react'
import Sidebar from './Sidebar'
import Albums from './Albums'
import Player from './Player'

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        {/* Sidebar */}
        <Sidebar />

        {/* Body */}
        <Albums />

        {/* Player */}
        <Player />

      </div>
    )
  }
}
