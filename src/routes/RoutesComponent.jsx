import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ArrayOfRoutes} from "./ArrayOfRoutes";
import Header from "../components/Header";

const RoutesComponent = () => {

    const routeComponents = ArrayOfRoutes.map(({path, component}, key) =>
        (<Route path = {path} element={component} key={key}/>)
    )

    return (
        <Router>
            <Header/>
            <Routes>
                {routeComponents}
            </Routes>
        </Router>
    );
};

export default RoutesComponent;