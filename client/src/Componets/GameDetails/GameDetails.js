import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getvideogamebyid from '../../actions/getvideogamebyid'
import { Link, useParams } from 'react-router-dom';

export default function GameDetails(props) {
    const dispatch = useDispatch()
    let {id} = useParams();
    useEffect(() => {
        dispatch(getvideogamebyid(id))
    }, [dispatch])

    var detail = useSelector((state) => state.videodetails)

    return (
        <div >
            <div >
                <Link to='/home' ><h2>home</h2></Link>
                <div >
                    <h2>{detail.name} details</h2>
                </div>
                <img  src={detail.image} alt="No image found" width='250px' heigth='300px' ></img>
                <h3>Description</h3>
                <h5>{detail.description}</h5>
                <div >
                    <h4>{`Rating:${detail.rating}`} </h4>
                </div>
                <div >
                    <h4>{`Released date:  ${detail.released}`}  </h4>
                </div>
                <h4>{`Platforms:  ${detail.platforms}`}</h4>
                <h4>{`Genres: ${detail.genres}`}</h4>
            </div>
        </div>
    )
}