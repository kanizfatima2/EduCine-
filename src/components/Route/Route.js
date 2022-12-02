import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from '../Shared/ErrorPage';
import Home from "../HomePage/Home";
import Blogs from "../HomePage/Blogs";
import FAQ from "../HomePage/FAQ";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import CoursesRoot from "../Courses/CoursesRoot";
import AllCourses from "../Courses/AllCourses";
import CourseDetail from "../CourseDetailsPage/CourseDetail";
import CheckoutPage from "../CourseDetailsPage/CheckoutPage";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {

        path: '/courses',
        element: <CoursesRoot></CoursesRoot>,
        children: [
            {
                path: '/courses',
                element: <AllCourses></AllCourses>,
                loader: () => fetch(`https://b610-learning-platform-server-side-kanizfatima2.vercel.app/courses`)
            },
            {
                path: '/courses/:id',
                element: <AllCourses></AllCourses>,

                loader: ({ params }) => fetch(`https://b610-learning-platform-server-side-kanizfatima2.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/details/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://b610-learning-platform-server-side-kanizfatima2.vercel.app/courses/${params.id}`)
            },
            {
                path: '/courses/details/checkout/:id',
                element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b610-learning-platform-server-side-kanizfatima2.vercel.app/courses/${params.id}`)
            }
        ]
    }

])