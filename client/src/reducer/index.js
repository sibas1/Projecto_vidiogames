import { GET_VIDEOGAMES, GET_VGAME_BY_ID, GET_VGAMES_BY_NAME, GET_GENERO ,POST_VGAME,GENRES_FILTER,ORIGEN_FILTER} from '../actions';


const initialState = {
    videogames: [],
    genres: [],
    videodetails: [],
    vgfilter : []
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
        case POST_VGAME:
            return {
                ...state
            }
        case  GENRES_FILTER:
            const allVgames = state.vgfilter
            const genrefilter = allVgames.filter(p =>p.genres.includes(action.payload))
            return{
                ...state,
                videogames: genrefilter 
            }
        case ORIGEN_FILTER:
            const origenV = state.vgfilter
            const origenfilter = action.payload == "DB" ? origenV.filter(p => p.origin === 'DB') : origenV.filter(p=> p.origin=== 'API')
            return{
                ...state,
                videogames: action.payload === 'All' ? state.vgfilter : origenfilter
            }
                
        default:
            return { ...state }
    }
}