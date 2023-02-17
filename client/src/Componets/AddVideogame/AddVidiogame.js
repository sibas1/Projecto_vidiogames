import React ,{useState}from 'react'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'


function AddVidiogame() {
    
    const [input,setInput] = useState({
        name: '',
        description: '',
        reldate: '',
        rating:'',
        platform: [],
        genre: []
    })
    const [errors,setErrors] =  useState({})

    const validate =()=>{
        const errors ={}
        if (!input.name.length) errors.name ="ingrese nombre"
        return errors
    }

    function hanleSumit(e){
       if(input.name.length==0){
        
       }
    }
    function handleOnChange (e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors (validate({
            ...errors,
            [e.target.name]:e.target.value
        }))
    }
    return (
        <>
        <div  >
        <h1 >Add your own videogame</h1>
            <form onSubmit={hanleSumit}>
           
                <div >
                    <label>Description:</label>
                    <textarea  name='description' onChange={handleOnChange} value={input.description}/>
                </div>
                <div >
                    <label>Game Name:</label>
                    <input   name ='name' onChange={handleOnChange} type='text'  value={input.name}/>
                    {errors.name&& <p>{errors.name}</p>}
                    <label>Released date:</label>
                    <input  name ='reldate' onChange={handleOnChange} type='text' value={input.reldate}/>
                    <label>Rating:</label>
                    <input   name ='rating' onChange={handleOnChange} type='text' value={input.rating}/>  
                    <label>Platforms:</label>   
                    <label>Genres:</label>
                    <select >      
                    </select>   
                    <button type='submit'>Add Game</button> 
                    <span><Link to='/home'><button >Back To Home</button></Link> </span>
                </div>
            </form>
        </div>
        <div/>
        </>

    )
}

export default AddVidiogame