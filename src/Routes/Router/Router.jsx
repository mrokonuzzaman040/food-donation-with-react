import React from "react";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from "../../Layout/Root/Root";
import Home from "../../Layout/Home/Home";
import AvailableFoods from "../../Components/AvailableFoods/AvailableFoods";
import AddFood from "../../Components/AddFood/AddFood";
import ManageFood from "../../Components/ManageFood/ManageFood";
import RequestFood from "../../Components/RequestFood/RequestFood";
import Login from "../../Components/Auth/Login/Login";
import Register from "../../Components/Auth/Register/Register";
import PrivetRout from "../PrivetRoute/PrivetRoute";
import FoodDetails from "../../Components/FoodDetails/FoodDetails";
import ErrorPage from "../../Components/Shared/ErrorPage/ErrorPage";
import Update from "../../Components/ManageFood/FoodFeature/Update";
import ManageFoodBtn from "../../Components/ManageFood/FoodFeature/ManageFoodBtn";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: '/availablefoods',
                element: <AvailableFoods> </AvailableFoods>,
                loader: async () => {
                    const response = await fetch('https://food-donation-server.vercel.app/foods');
                    const data = await response.json();
                    // Filter the data here
                    const filteredData = data.filter(item => item.foodStatus === "Available");
                    return filteredData;
                }
            },
            {
                path: '/details/:id',
                element: <PrivetRout><FoodDetails></FoodDetails></PrivetRout>,
                loader: ({ params }) => fetch(`https://food-donation-server.vercel.app/foods/${params.id}`)
            },
            {
                path: '/addfood',
                element: <PrivetRout><AddFood></AddFood></PrivetRout>,
            },
            {
                path: '/managemyfood',
                element: <PrivetRout><ManageFood></ManageFood></PrivetRout>,
            },
            {
                path: '/update/:id',
                element: <PrivetRout><Update></Update></PrivetRout>,
            },
            {
                path: '/mamangefood/:id',
                element: <PrivetRout><ManageFoodBtn></ManageFoodBtn></PrivetRout>,
                loader: ({ params }) => fetch(`https://food-donation-server.vercel.app/foods/${params.id}`)
            },
            {
                path: '/foodRequest',
                element: <PrivetRout><RequestFood></RequestFood></PrivetRout>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    }

]);

export default Router;