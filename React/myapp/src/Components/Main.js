import React from 'react'
import {BrowserRouter as BR,Route,Routes} from "react-router-dom"
import { Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
function Main() {
  return (
    <>
    <BR>
     <ul>
        <li><Link to="/">home   </Link></li>
        <li><Link to="/about/1">about  </Link></li>
        <li><Link to="/contact">contact</Link></li>
        
     </ul>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about/:data' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BR>
    </>
  )
}

export default Main