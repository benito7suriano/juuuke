import React from 'react'
import Sidebar from './Sidebar'
import Albums from './Albums'
import SingleAlbum from './SingleAlbum'
import Player from './Player'
import Axios from 'axios'

const audio = document.createElement('audio')

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      selectedAlbum: {},
      songPlaying: {}
    }
    this.goToAlbum = this.goToAlbum.bind(this)
    this.goBackToAlbums = this.goBackToAlbums.bind(this)
    this.playSong = this.playSong.bind(this)
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

  playSong(song) {
    audio.src = song.audioUrl
    audio.load()
    audio.play()

    this.setState({songPlaying: song})
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
            songPlaying={this.state.songPlaying}
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
