import { REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,

}

export default function(state = initialState, action){
    
    const { type, payload } = action;

    switch(type){

        case REGISTER_SUCCESS:
            localStorage.setItem('token' , payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAILURE:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
            }
        default:
            return state
    }
}