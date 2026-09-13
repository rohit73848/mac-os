import React from 'react'
import './dock.scss'
const Dock = () => {
  return (
    <footer className='dock'>
        <div className="icon note"><img src="./public/doc-icons/note.svg" alt="note" /></div>
        <div className="icon pdf"><img src="./public/doc-icons/pdf.svg" alt="pdf" /></div>
        <div className="icon github"><img src="./public/doc-icons/github.svg" alt="github" /></div>
        <div className="icon mail"><img src="./public/doc-icons/mail.svg" alt="mail" /></div>
        <div className="icon calender"><img src="./public/doc-icons/calender.svg" alt="calender" /></div>
        <div className="icon spotify"><img src="./public/doc-icons/spotify.svg" alt="spotify" /></div>
        <div className="icon cli"><img src="./public/doc-icons/cli.svg" alt="cli" /></div>
        <div className="icon link"><img src="./public/doc-icons/link.svg" alt="link" /></div>
    </footer>
  )
}

export default Dock
