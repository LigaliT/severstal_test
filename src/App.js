import React from "react";
import './App.css';
import RoutesComponent from "./routes/RoutesComponent";
import {Provider} from "react-redux";
import {store} from "./store/store";


function App() {
    return (
        <Provider store={store}>
            <RoutesComponent/>
        </Provider>
    );
}

export default App;
