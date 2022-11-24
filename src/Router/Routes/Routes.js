import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllTours from "../../pages/AllTours/AllTours";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import OneService from "../../pages/OneService/OneService";
import Service from "../../pages/Service/Service";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><Service></Service></PrivateRoute>
            },
            {
                path:'/allservice',
                loader: () => fetch('http://localhost:5000/allservices'),
                element: <AllTours></AllTours>
            },
            {
                path:'/services/:id',
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
                element: <OneService></OneService>
            }

        ]
    }
])

export default routes;