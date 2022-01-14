import {put, takeEvery, all} from 'redux-saga/effects'
import {userSignInFailed, userSignInSuccess} from "./actions/SignInActions";
import {USER_SIGNIN} from "./actions/ConstantNames";

function* userSignInAsync(data){
    try {
        yield put(userSignInSuccess(data?.payload));
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
    }catch(error){
        yield put (userSignInFailed(error))
    }
}

function* watchUserSignInAsync(){
    yield takeEvery(USER_SIGNIN, userSignInAsync)
}

export default function* rootSignInSaga(){
    yield all([
        watchUserSignInAsync()
    ])
};

