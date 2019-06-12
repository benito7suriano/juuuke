import React from 'react'
import Album from './Album'

const Albums = () => {
  return (
    <div className='container'>
      <div id='albums' className='row wrap'>
        <Album name="Album Test 1" />

        <Album name="Album Test 2" />
      </div>
    </div>
  )
}

export default Albums
