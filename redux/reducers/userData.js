/**
 * User Data Reducer
 * Manages user data state and handles user data-related actions
 */
import { LOGIN, LOGOUT, CHANGE_NAME } from '../constants';

const initialState = {
    isSignedIn: false,
    userName: "Doğukan"
}

const userDataReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isSignedIn: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isSignedIn: action.payload
            };
        case CHANGE_NAME:
            return {
                ...state,
                userName: action.payload
            };
        default:
            return state;
    }
}


export default userDataReducer;