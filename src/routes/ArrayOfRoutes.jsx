import Main from "../components/Main";
import Profile from "../components/Profile";
import Login from "../components/Login";
import News from "../components/News";

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
        component: <News/>
    },
    {
        path: '/profile',
        component: <Profile/>
    }
]