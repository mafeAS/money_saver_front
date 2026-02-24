import { createBrowserRouter } from "react-router-dom";
import Login from '../views/Auth/Login.tsx';
import Home from "../views/Home.tsx";
import PublicRoute from "./guards/PublicRoute.tsx";
import ProtectedRoute from "./guards/ProtectedRoute.tsx";



const router = createBrowserRouter([

    {
        path:"/",
        element:
            <ProtectedRoute>
                <Home/>
            </ProtectedRoute>
            
        
        
    },

    {
        path:"/login",
        element:(
       <PublicRoute>
            <Login/>
       </PublicRoute>     
        )
    }
])

export default router