import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/addtodo"}>add to do</Link>

    </div>
  )
}

export default Navbar