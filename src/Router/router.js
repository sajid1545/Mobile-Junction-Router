import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
        ]
    }
])