import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//layouts
import RootLayout from "../utils/RootLayout";

//components
import Navbar from "../components/Navbar";
import Auth from "../components/Auth";
import Banner from "../components/Banner";


function useRoutes() {
    //routes
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Navbar />} />
                <Route path="auth" element={<Auth />} />
                <Route path="browse" element={<Banner />} />
            </Route>
        )
    );

    return router;
}

export default useRoutes