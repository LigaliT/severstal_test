import {USER_SIGNIN_FAILED, USER_SIGNIN_SUCCESS} from "../actions/ConstantNames";

const initialState = {
    login: '',
    password: '',
    error: '',
    isAuthenticated: localStorage.getItem('isAuthenticated') ? JSON.parse(localStorage.getItem('isAuthenticated')) : false,
};


export const signInReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_SIGNIN_SUCCESS:{
            return {...state,
                login: action.payload?.login,
                password: action.payload?.password,
                isAuthenticated: true
            };
        }
        case USER_SIGNIN_FAILED:{
            return {...state,
                error: action.payload?.error
            };
        }
        default:
            return state;
    }
}