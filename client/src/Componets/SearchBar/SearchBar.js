import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import getvideogamebyname from '../../actions/getvideogamebyname';
import stl from './searchBar.module.css'
import { Link } from 'react-router-dom';


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleinputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getvideogamebyname(name)) 
        setName("") 
    }

    return (
        <div className={stl.contenedor}>
            <div className={stl.cBB}>
      <Link to='/home'><button className={stl.DD}>home</button></Link>
      <Link to= '/addvideogame'><button className={stl.DD}>add</button></Link>
    </div>
            <input  onChange={(e) => handleinputChange(e)} type='text' placeholder='Search by name' value={name} />
            <button className={stl.ssB} onClick={(e) => handleSubmit(e)} type='submit'>Search</button>
        </div>
    )
}