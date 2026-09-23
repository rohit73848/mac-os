import React from 'react'
import './dock.scss'
const Dock = ({windowsState,setWindowsState}) => {
  return (
    <footer className='dock'>
        <div
        onClick={()=>{setWindowsState(state=>({...state, github:true}))}} 
         className="icon github"><img src="./public/doc-icons/github.svg" alt="github" /></div>

        <div
        onClick={()=>{setWindowsState(state=>({...state, note:true}))}}  
        className="icon note"><img src="./public/doc-icons/note.svg" alt="note" /></div>

        <div 
        onClick={()=>{setWindowsState(state=>({...state, resume:true}))}} 
        className="icon pdf"><img src="./public/doc-icons/pdf.svg" alt="pdf" /></div>

        <div className="icon calender"><img src="./public/doc-icons/calender.svg" alt="calender" /></div>

        <div 
        onClick={()=>{setWindowsState(state=>({...state, spotify:true}))}} 
        className="icon spotify"><img src="./public/doc-icons/spotify.svg" alt="spotify" /></div>

        <div 
        onClick={()=>{window.open("rohit.noni2006@gmail.com","_blank")}}
        className="icon mail"><img src="./public/doc-icons/mail.svg" alt="mail" /></div>

        <div className="icon link"><img src="./public/doc-icons/link.svg" alt="link" /></div>

        <div 
        onClick={()=>{setWindowsState(state=>({...state, cli:true}))}} 
        className="icon cli"><img src="./public/doc-icons/cli.svg" alt="cli" /></div>
    </footer> 
  )
}

export default Dock
