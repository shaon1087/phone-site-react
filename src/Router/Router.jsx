
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from '../Pages/Home/Home';

const myCreatedRoute = createBrowserRouter([
    {
        Path: "/",
        element : <MainLayout></MainLayout>,
        Children : [
            {
                path : "/",
                element : <Home></Home>
                
            }
        ]
    }

]);

export default myCreatedRoute;