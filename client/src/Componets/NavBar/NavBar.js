import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <Link to='/home'><button>home</button></Link>
      <Link to= '/addvideogame'><button>add</button></Link>
    </div>

  )
}

export default NavBar