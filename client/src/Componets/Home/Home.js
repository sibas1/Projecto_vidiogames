import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getvgames from '../../actions/getvideogame';
import Videogame from '../Videogame/Videogame';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import getgenero from '../../actions/getgeneros';
import NavBar from '../NavBar/NavBar';
import genrefilter from '../../actions/genrefilter';
import origenfilter from '../../actions/origenfilter';
import Paguinado from '../Paguinado/Paguinado';
import stl from './Home.module.css';

function Home() {
  const dispatch = useDispatch()
  const allVgames = useSelector((state) => state.videogames)
  const allgenero = useSelector((state) => state.genres)
  const [paguina, setPaguina] = useState(1);
  const [ppaguina, setPpaguina] = useState(5)
  const [cc, setCC] = useState("cargando"); 
  const max = allVgames.length / ppaguina;
  useEffect(() => { dispatch(getvgames()) }, [dispatch],)
  useEffect(() => { dispatch(getgenero()) }, [dispatch],)
  
  function allg(e){
    console.log(allVgames)
    
  }
  function handleGenreFilter(e) {
    e.preventDefault();
    dispatch(genrefilter(e.target.value))
    console.log(allVgames.length)
  }
  function handleOrigenFilter(e) {
    e.preventDefault();
    dispatch(origenfilter(e.target.value))
  }
  if (allVgames.length) {
    return (
      <div className={stl.c1}>
        <div><SearchBar></SearchBar></div>
        <div>
          <select onChange={e => handleGenreFilter(e)}>
            {allgenero.sort().map(e => { return <option value={e.name}>{e.name}</option> })}
          </select>
        </div>
        <div>
          <select onChange={e => handleOrigenFilter(e)}>
            <option value={'ALL'}>ALL</option>
            <option value={'DB'}>DB</option>
            <option value={'API'}>API</option>
          </select>
        </div>
        <div className={stl.c5}> {allVgames.slice(
          (paguina - 1) * ppaguina,
          (paguina - 1) * ppaguina + ppaguina
        ).map(p => <Link to={"/videogame/" + p.id}><Videogame name={p.name} image={p.image} key={p.id} ganere={p.genres} rating={p.rating}></Videogame> </Link>)}
        </div>
        <div>
          <Paguinado paguina={paguina} setPaguina={setPaguina} max={max} ></Paguinado>
        </div>

      </div>

    )
  } else {
    const timerId = setTimeout(() => setCC("no hay"), 4000);
    return (
      <div >
        <div><NavBar /></div>
       <p>{cc}</p>
      </div>

    )
  }

}

export default Home