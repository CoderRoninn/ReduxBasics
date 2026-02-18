/**
 * User Actions
 * Redux action creators for user operations
 */
import { LOGIN, LOGOUT, CHANGE_NAME } from '../constants';

const loginAction = () => {
    return {
        type: LOGIN,
        payload: true
    }
};

const logoutAction = () => {
    return {
        type: LOGOUT,
        payload: false
    }
};

const changeNameAction = (userName) => {
    return {
        type: CHANGE_NAME,
        payload: userName
    }
};

export default {
    loginAction,
    logoutAction,
    changeNameAction
}; 