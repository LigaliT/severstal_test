import {USER_SIGNIN, USER_SIGNIN_FAILED, USER_SIGNIN_SUCCESS} from "./ConstantNames";

export const userSingIn = (payload) => ({type: USER_SIGNIN, payload});
export const userSignInSuccess = (payload) => ({type: USER_SIGNIN_SUCCESS, payload});
export const userSignInFailed = (payload) => ({type: USER_SIGNIN_FAILED, payload});