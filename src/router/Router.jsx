import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Event from "../pages/Event";
import Team from "../pages/Team";
import Login from "../pages/Login";
import PublicationsPage from "../pages/PublicationsPage";
import NotFound from "../components/NotFound";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement:<NotFound/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/events",
                element: <Event />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/team",
                element: <Team />
            },
            {
                path: "/publications",
                element: <PublicationsPage />
            },
            {
                path: "/*",
                element: <NotFound />  
            }
        ]
    }
]);

export default router;
