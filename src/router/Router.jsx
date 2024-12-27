import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Event from "../pages/Event";
import Team from "../pages/Team";
import Login from "../pages/Login";
import PublicationsPage from "../pages/PublicationsPage";


const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"Finance-Club-New-Website-2024/",
                element:<Home/>
            },
            {
                path:"Finance-Club-New-Website-2024/events",
                element:<Event/>
            },
            {
                path:"Finance-Club-New-Website-2024/login",
                element:<Login/>
            },
            {
                path:"Finance-Club-New-Website-2024/team",
                element:<Team/>
            },
            {
                path:"Finance-Club-New-Website-2024/publications",
                element:<PublicationsPage/>
            }
        ]

    }
]);

export default router;
