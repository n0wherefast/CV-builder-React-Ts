import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navbar() {
  return (

       <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="navbar-brand">CV Builder</div>
    <form className="d-flex" role="search">
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

  )
}
