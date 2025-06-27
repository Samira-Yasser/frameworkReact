import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    

    return (

<nav className="fixed-top navbar navbar-expand-lg py-4">
  <div className="container">
    <Link className="navbar-brand text-white fs-2 fw-bolder" to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav ms-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active text-white fs-6 fw-bold" aria-current="page" to="/home"></Link>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link  text-white fs-6 fw-bold" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fs-6 fw-bold text-uppercase" to="/portfolio">portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fs-6 fw-bold" to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

)
}
