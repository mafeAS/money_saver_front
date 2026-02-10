import { createBrowserRouter } from "react-router-dom";
import Login from '../views/Auth/Login.tsx';
import Home from "../views/Home.tsx";



const router = createBrowserRouter([

    {
        path:"/",
        element:<Home/>
    },

    {
        path:"/login",
        element:<Login/>
    }
])

export default router