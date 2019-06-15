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
    this.pauseSong = this.pauseSong.bind(this)
    this.nextSong = this.nextSong.bind(this)
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

  pauseSong() {
    audio.pause()

    this.setState({songPlaying: {}})
  }

  nextSong(songPlaying, selectedAlbum) {
    let nextSong = {}

    selectedAlbum.songs.indexOf(songPlaying) === selectedAlbum.songs.length - 1
      ? nextSong = selectedAlbum.songs[0]
      : nextSong = selectedAlbum.songs[selectedAlbum.songs.indexOf(songPlaying) + 1]

    audio.src = nextSong.audioUrl
    audio.load()
    audio.play()

    this.setState({ songPlaying: nextSong })
  }

  // prevSong(songPlaying, selectedAlbum) {

  // }

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
            playSong={this.playSong}
            pauseSong={this.pauseSong} />
          : <Albums
            albums={albums}
            goToAlbum={this.goToAlbum} />
        }
        {/* Player */}
        <Player
          songPlaying={this.state.songPlaying}
          selectedAlbum={this.state.selectedAlbum}
          playSong={this.playSong}
          pauseSong={this.pauseSong}
          nextSong={this.nextSong}
           />
      </div>
    )
  }
}
