import React, { useState } from 'react'
import './App.css'
import Login from '../pages/Login'

function App() {
const [timerModalopen,setTimerModalOpen]=useState(false)
const [username,setusername]=useState('')
const [userUrl,setUserUrl]=useState('')
  return (
    <>
    <Login 
    setTimerModalOpen={setTimerModalOpen}
    timerModalopen={timerModalopen}
    username={username}
    setusername={setusername}
    userUrl={userUrl}
  setUserUrl={setUserUrl}    
    />
    
    </>
  )
}

export default App
