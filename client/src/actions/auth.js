import axios from 'axios';
import { setAlert } from './alert'
import { REGISTER_SUCCESS, REGISTER_FAILURE } from './types'
export const register= ({ firstName, lastName, userName, email, password}) =>async dispatch =>{
    try {
        const res = await axios.post('/api/users', {firstName, lastName, userName,email,password})
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        const errors = error.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAILURE
        });
    }
}