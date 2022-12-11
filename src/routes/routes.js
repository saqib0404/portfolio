import { createBrowserRouter } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";
import Project1 from "../components/Projects/Project1";
import Project2 from "../components/Projects/Project2";
import Project3 from "../components/Projects/Project3";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Banner />,
    },
    {
        path: '/blogs',
        element: <Blogs />
    },
    {
        path: '/project1',
        element: <Project1 />
    },
    {
        path: '/project2',
        element: <Project2 />
    },
    {
        path: '/project3',
        element: <Project3 />
    }
])