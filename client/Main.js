import React from 'react'
import Sidebar from './Sidebar'
import Albums from './Albums'
import SingleAlbum from './SingleAlbum'
import Player from './Player'
import Axios from 'axios'

const audio = document.createElement('audio')
audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'


export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      selectedAlbum: {}
    }
    this.goToAlbum = this.goToAlbum.bind(this)
    this.goBackToAlbums = this.goBackToAlbums.bind(this)
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

  async goToAlbum(albumId) {
    console.log(typeof albumId)

    try {
      const res = await Axios.get(`/api/albums/${albumId}`)
      const selectedAlbum = res.data

      this.setState({ selectedAlbum })
    } catch (err) {
      console.log(`Error retrieving data: ${err}`)
    }
  }

  goBackToAlbums() {
    this.setState({ selectedAlbum: {} })
  }

  playSong() {
    audio.load()
    audio.play()
  }

  render () {
    const { albums } = this.state

    return (
      <div id='main' className='row container'>
        {/* Sidebar */}
        <Sidebar
          goBackToAlbums={this.goBackToAlbums} />
        {/* Body */}
        {this.state.selectedAlbum.id
          ? <SingleAlbum
            selectedAlbum={this.state.selectedAlbum}
            playSong={this.playSong} />
          : <Albums
            albums={albums}
            goToAlbum={this.goToAlbum} />
        }
        {/* Player */}
        <Player />
      </div>
    )
  }
}
