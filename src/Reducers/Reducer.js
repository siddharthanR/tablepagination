import {READ_DATA, DELETE_DATA} from '../Actions/Actions'

export default function Reducer(state = [], action) {
    switch(action.type) {
        case READ_DATA:
            return {
                ...state,
                payload: action.data,
            }
        case DELETE_DATA:
            return {
                ...state,
                payload: action.OldData,
                index: action.index + "ref"
            }    
        default:
            return state
    }
}