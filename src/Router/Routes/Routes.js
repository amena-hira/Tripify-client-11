import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddReview from "../../pages/AddReview/AddReview";
import AllTours from "../../pages/AllTours/AllTours";
import Blog from "../../pages/Blog/Blog";
import EditReview from "../../pages/EditReview/EditReview";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
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
                loader: () => fetch('https://tripify-server-indol.vercel.app/allservices'),
                element: <AllTours></AllTours>
            },
            {
                path:'/services/:id',
                loader: ({params})=> fetch(`https://tripify-server-indol.vercel.app/services/${params.id}`),
                element: <OneService></OneService>
            },
            // Add Review Route
            {
                path:'/review/service/:id',
                loader: ({params})=> fetch(`https://tripify-server-indol.vercel.app/services/${params.id}`),
                element: <AddReview></AddReview>
            },
            {
                path:'/myreview',
                loader: () => fetch('https://tripify-server-indol.vercel.app/allservices'),
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path:'/editreview/:id',
                loader: ({params})=> fetch(`https://tripify-server-indol.vercel.app/reviews/${params.id}`),
                element: <PrivateRoute><EditReview></EditReview></PrivateRoute>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },

        ]
    }
])

export default routes;