import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';
//this action will be called from React component
export const setAlert = (msg, alertType) => dispatch => {

    const id = uuidv4();
    dispatch({
        type: SET_ALERT,
        payload: {msg , alertType, id}
    });
}