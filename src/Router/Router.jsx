import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddTask from "../Component/AddTask/AddTask";
import SignIn from "../AuthenTication/SignIn";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <PrivateRoute><Home /></PrivateRoute>
            },
            {
                path: "addTask",
                element: <PrivateRoute><AddTask /></PrivateRoute>
            },
            {
                path: "login",
                element: <SignIn />
            }
        ]

    }
])
export default router