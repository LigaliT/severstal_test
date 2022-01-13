import Main from "../components/Main";
import Profile from "../components/Profile";
import Login from "../components/Login";

export let ArrayOfRoutes = [{
        path: '/',
        component: <Main/>
    },
    {
        path: '/login',
        component: <Login/>
    },
    {
        path: '/news',
        component: ''
    },
    {
        path: '/profile',
        component: <Profile/>
    }
]