import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import getvideogamebyname from '../../actions/getvideogamebyname';

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
        <div>
            <input onChange={(e) => handleinputChange(e)} type='text' placeholder='Search by name' value={name} />
            <button onClick={(e) => handleSubmit(e)} type='submit'>Search</button>
        </div>
    )
}