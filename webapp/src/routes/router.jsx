import Home from "./Home";
import Admin from "./Admin";
import Login from "./Login";
import Details from "./Details";
import NotFound from ":/NotFound";
import { createHashRouter, RouterProvider } from "react-router-dom";


const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
            path:  "/Home",
            element: <Home/>,
            
        },

        {
            path: "/Admin",
            element: <Admin/>   
        },

        {
            path: "/Details",
            element: <Details/>   
        },

        {
            path: "/Kundvagn",
            element: <Kundvagn/>   
        },

        {
            path: "/Login",
            element: <Login/>   
        },

        {
            path: "/NotFound",
            element: <NotFound/>   
        },


        ],
    },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);





