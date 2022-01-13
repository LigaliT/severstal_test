import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSignInSaga from "./sagas";
import {signInReducer} from "./reducers/SignInReducer";

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    signInReducer,
});


export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSignInSaga);