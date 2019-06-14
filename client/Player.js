import React from 'react'

const Player = (props) => {
  const { songPlaying, playSong, pauseSong } = props

  return (
    <div id='player-container' className={songPlaying.id ? '' : 'hidden'}>
      <div id='player-controls'>
        <div className='row center'>
          <i className='fa fa-step-backward'></i>
          {songPlaying.id ? <i className='fa fa-pause-circle' onClick={() => pauseSong()}></i> : <i className='fa fa-play-circle' onClick={() => playSong(songPlaying)}></i>}
          <i className='fa fa-step-forward'></i>
        </div>
      </div>
    </div>
  )
}

export default Player
