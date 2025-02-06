import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Video = () => {
    const nav=useNavigate();
    function handleClick(){
         nav('shorts')
    }
    function handleClick1(){
        nav('profile')
    }
  return (
    <div>
        <h1>This is Video Page</h1>
       <button onClick={handleClick}>Click Shorts</button>
       <button onClick={handleClick1}>Click Profile</button>
       <Outlet/>
    </div>
  )
}

export default Video