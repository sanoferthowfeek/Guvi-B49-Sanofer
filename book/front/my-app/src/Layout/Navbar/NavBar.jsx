import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <>
    <nav  class="navbar navbar-expand-lg" style={{background:"rgb(24,24,24)"}}>
  <div class="container-fluid">
  <a class="navbar-brand" href="/">
      <img src="/assets/logo.jpeg" alt="Logo" width="50" height="50" class="d-inline-block align-text-top rounded-5"/> &nbsp;
     <b className='text-white'><span style={{color:"skyblue"}}>Book Store</span></b>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div align="center" class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div  class="navbar-nav  justify-content-center w-100">
        <a   class="nav-link  px-5 fs-5" aria-current="page" href="/"  style={{color:"skyblue"}}><span className='nav-item'><i className="fa-solid fa-house-chimney"></i> &nbsp; Home</span></a>
        <a class="nav-link px-5 fs-5" href="/About"  style={{color:"skyblue"}}><span className='nav-item'><i className="fa-solid fa-eject"></i>  &nbsp;About</span></a>
        <a  class="nav-link px-5 fs-5" href="/Books"  style={{color:"skyblue"}}><span className='nav-item'><i className="fa-solid fa-book-open-reader"></i> &nbsp; Books</span></a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar