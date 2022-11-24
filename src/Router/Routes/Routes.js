import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllTours from "../../pages/AllTours/AllTours";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Service from "../../pages/Service/Service";
import Signup from "../../pages/Signup/Signup";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            },
            {
                path:'/addservice',
                element: <Service></Service>
            },
            {
                path:'/allservice',
                loader: () => fetch('http://localhost:5000/allservices'),
                element: <AllTours></AllTours>
            },

        ]
    }
])

export default routes;