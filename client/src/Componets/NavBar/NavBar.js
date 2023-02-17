import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <Link to='/home'><div>home</div></Link>
      <Link to= '/addvideogame'><div>add</div></Link>
    </div>

  )
}

export default NavBar