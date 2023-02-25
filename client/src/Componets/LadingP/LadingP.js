import React from 'react'
import { Link } from 'react-router-dom'
import slt from './ladingP.module.css'
export default function LadingP() {
  return (
    <div className={slt.paguina}><Link to='/home'><button className={slt.bloque}>HOME</button></Link></div>
     

   
  )
}
