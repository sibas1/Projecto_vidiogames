import React, { useState } from 'react'

function Paguinado({paguina,setPaguina,max}) {
    const [imp, setImp] = useState(1)
    const next=()=>{
        setImp(imp+1)
        setPaguina(paguina+1)
    }
    const prep=()=>{
        setImp(imp-1)
        setPaguina(paguina-1)
    }

   const exact=(e)=> {
     if(e.keyCode==13){
      setPaguina(parseInt(e.target.value))
      if(parseInt(e.target.value)<1 || parseInt(e.target.value)>max || isNaN (parseInt(e.target.value))){
        setPaguina(1)
        setImp(1)
      }else{
        setPaguina(parseInt(e.target.value))
      }
     }
  }
   const cambio =(e) =>{
    setImp(e.target.value)
   }
  return (
    <div>
        <button disabled={paguina==max} onClick={next}>Next</button>
        <input onChange={(e)=>cambio(e)} onKeyDown={(e)=>exact(e)} name='page' autoComplete='off' value={imp}/><p>de {max}</p>
        <button disabled={paguina==1} onClick={prep}>prep</button>
    </div>
  )
}

export default Paguinado