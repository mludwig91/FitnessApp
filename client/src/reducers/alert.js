import {SET_ALERT, REMOVE_ALERT } from '../actions/types'
//array of objects for alerts
const initialState=[];

//action contains type of action and payload
export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case SET_ALERT:
        //state is immutable, must be copied
        return [...state, action.payload];
        //filter alerts remove
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}