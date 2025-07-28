import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand fs-2 " to="/">START FRAMEWORK
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
      
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/portofolio">PORTOFOLIO</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/contact">CONATCT</Link>
        </li>
        
      
      
      </ul>
 
    </div>
  </div>
</nav>
  )
}
