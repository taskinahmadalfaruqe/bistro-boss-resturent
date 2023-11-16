import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Layout/UserLayout/UserLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";


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
                path: '/loading',
                element: <LoadingPage></LoadingPage>
            }
        ]
    }
])

export default Rousts;