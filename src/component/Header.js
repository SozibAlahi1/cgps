import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSchool } from "react-icons/fa";
function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light shadow p-3 mb-5 bg-body rounded">
  <div class="container-fluid">
    <div className='logo'>
   <NavLink to='/'><FaSchool />  চকছাতারী প্রাইমারী স্কুল</NavLink> 
   </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <NavLink to="/" className="nav-link">নীড়</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/about" className="nav-link">আমাদের সম্পর্কে</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/contact" className="nav-link">যোগাযোগ</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/login" className="nav-link">লগিন</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/register" className="nav-link">নিবন্ধন</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </>
  )
}

export default Header