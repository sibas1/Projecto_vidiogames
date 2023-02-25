import React from 'react'
import slt from './vidiogame.module.css'

function Vidiogame({ name, image, ganere, rating }) {
  return (
    <div className={slt.container}>
      <div className={slt.card}>
      <img className={slt.imga} src={image} alt='Image Not Found'  />
       <div className={slt.contenido}>
         <h3>{name}</h3>
        <p>{ganere}</p>
        <span>{rating}</span>
       </div>
       
      </div>
    </div>

  )
}

export default Vidiogame