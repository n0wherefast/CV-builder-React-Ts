import React from 'react'
import { Button } from './utils'

export default function Navbar() {
  return (

       <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="navbar-brand">CV Builder</div>
    <form className="d-flex" role="search">
      <Button className={"btn btn-outline-success"} type={"submit"} name={"Search"} />
    </form>
  </div>
</nav>

  )
}
