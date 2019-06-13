import React from 'react'

const Sidebar = (props) => {
  const { goBackToAlbums } = props

  return (<div id='sidebar'>
    <img src='juke.svg' id='logo' />
    <section>
      <h4>
        <a onClick={() => goBackToAlbums()}>ALBUMS</a>
      </h4>
    </section>
  </div>)
}

export default Sidebar
