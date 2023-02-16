import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getvgames from '../../actions/getvideogame';
import Videogame from '../Videogame/Videogame';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import getgenero from '../../actions/getgeneros';

function Home() {
  const dispatch = useDispatch()
  const allVgames = useSelector((state) => state.videogames)
  const allgenero = useSelector((state) => state.genres)
  useEffect(() => { dispatch(getvgames()) }, [dispatch],)
  useEffect(() => { dispatch(getgenero()) }, [dispatch],)
  console.log(allVgames)
  console.log(allgenero)
  if (allVgames.length) {
    return (
      <div>
        <div><SearchBar></SearchBar></div>
        <div><select>{allgenero.map(e=><option value={e}>{e.name}</option>)}</select></div>
        {allVgames.map(p => <Link to={"/videogame/" + p.id}><Videogame name={p.name} image={p.image} key={p.id} ganere={p.genres} rating={p.rating}></Videogame> </Link>)}
      </div>

    )
  } else {
    return (
      <div>
        <h1>llll</h1>
        <Link to='/home' >
          home
        </Link>
      </div>

    )
  }

}

export default Home