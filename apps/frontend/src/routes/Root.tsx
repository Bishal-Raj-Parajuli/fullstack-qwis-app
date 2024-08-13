import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Categories from "../pages/Categories";
import Category from "../pages/Category";
import Quiz from "../pages/Quiz";

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
    },
    {
        path: '/qwis/:id',
        element: <Quiz />
    }
])