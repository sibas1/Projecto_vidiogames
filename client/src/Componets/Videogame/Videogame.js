import React from 'react'

function Vidiogame({name,image,ganere,rating}) {
  return (

    <div>
       <h3>{name}</h3>
       <p>{ganere}</p>
       <img src={image} alt ='Image Not Found' width='250px' heigth='300px' />
       <span>{rating}</span>
    </div>   
)
}

export default Vidiogame