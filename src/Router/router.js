import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import PhoneDetails from "../Components/PhoneDetails/PhoneDetails";
import Phones from "../Components/Phones/Phones";

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
            {
                path: '/phones',
                
                element : <Phones></Phones>
            },
            {
                path: '/phone/:id',
                loader: async ({params}) => {
                    return fetch(`https://openapi.programming-hero.com/api/phone/${params.id}`)
                },
                element : <PhoneDetails></PhoneDetails>
            }
        ]
    }
])