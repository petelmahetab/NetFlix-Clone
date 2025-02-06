import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Video from './Video'
const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to='/'><Home/></Link></li>
            <li><Link to='/about'><About/></Link></li>
            <li><Link to='/video'><Video/></Link></li>
        </ul>
    </div>
  )
}

export default Navbar