import { GET_VIDEOGAMES, GET_VGAME_BY_ID, GET_VGAMES_BY_NAME, GET_GENERO } from '../actions';


const initialState = {
    videogames: [],
    genres: [],
    videodetails: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            if (action.payload) {
                return {
                    ...state,
                    videogames: action.payload,
                    vgfilter: action.payload
                }
            } else {
                return {
                    ...state,
                    videogames: []
                }
            }
        case GET_VGAMES_BY_NAME:
            return {
                ...state,
                videogames: action.payload
            }
        case GET_VGAME_BY_ID:
            return {
                ...state,
                videodetails: action.payload
            }
            case GET_GENERO:
                return {
                    ...state,
                    genres: action.payload
                }

        default:
            return { ...state }
    }
}