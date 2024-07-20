import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Categories from "../pages/Categories";
import Category from "../pages/Category";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />
    },
    {
        path: '/categories',
        element: <Categories />
    },
    {
        path: '/categories/:id',
        element: <Category />
    }
])