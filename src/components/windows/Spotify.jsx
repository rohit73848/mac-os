import React from 'react'
import MacWindow from "./MacWindow"
import "./spotify.scss"
const Spotify = ({windowName, setWindowsState,}) => {
  return (
    <MacWindow width='25vw' windowName={windowName}
      setWindowsState={setWindowsState}>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} 
            src="https://open.spotify.com/embed/album/0Rkv5iqjF2uenfL0OVB8hg?utm_source=generator&theme=0&si=6cfa6c75cfa04891" 
            width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify
