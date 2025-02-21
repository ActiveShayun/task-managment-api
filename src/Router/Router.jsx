import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddTask from "../Component/AddTask/AddTask";
import SignIn from "../AuthenTication/SignIn";
import PrivateRoute from "./PrivateRoute";
import EditTask from "../Component/EditTask/EditTask";

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
            },
            {
                path: "/edit/:id",
                element: <EditTask />,
                loader: ({ params }) => fetch(`http://localhost:5000/singleTask/${params.id}`)
            }
        ]

    }
])
export default router