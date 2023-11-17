import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Layout/UserLayout/UserLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";


const Rousts = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout></UserLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/menu',
                element: <MenuPage></MenuPage>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/signUp',
                element: <SignUpPage></SignUpPage>
            },
            {
                path: '/loading',
                element: <LoadingPage></LoadingPage>
            },
            {
                path: '/loading',
                element: <LoadingPage></LoadingPage>
            },
        ]
    }
])

export default Rousts;