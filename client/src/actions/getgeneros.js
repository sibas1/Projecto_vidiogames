import { GET_GENERO } from '.';
import axios from 'axios'

export default function getgenero() {
    return async function (dispatch){
        var result = await axios.get('http://localhost:3001/genero'); 
        console.log(result)
        return dispatch({ 
            type: GET_GENERO, 
            payload: result.data
        })                                                                                                 
    }
}