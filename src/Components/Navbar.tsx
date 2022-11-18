import React from 'react'
import { Button } from './utils'

export default function Navbar() {
  return (

       <nav className="navbar  navbar-dark bg-dark fixed-top ">
  <div className="container-fluid ">
    <div className="navbar-brand">CV Builder</div>
   
      <Button className={"btn btn-outline-success"} type={"submit"} name={"Search"} />
   
  </div>
</nav>

  )
}
