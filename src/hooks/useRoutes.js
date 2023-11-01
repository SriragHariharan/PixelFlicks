import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

//layouts
import RootLayout from "../utils/RootLayout";

//components
import Navbar from "../components/Navbar";
import Auth from "../components/Auth";
import Browse from "../pages/Browse";
import Search from "../pages/Search";
import MovieDetails from "../pages/MovieDetails";


function useRoutes() {
    const USER = useSelector(store => store?.user?.user);
    console.log(USER);

    //routes
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={!USER ? <Navbar /> : <Navigate to={'/browse'} />} />
                <Route path="auth" element={!USER ? <Auth /> : <Navigate to={'/browse'} />} />
                <Route path="browse" element={USER ? <Browse /> : <Navigate to={'/auth'} /> } />
                <Route path="search" element={USER ? <Search /> : <Navigate to={'/auth'} /> } />
                <Route path="movie-details" element={USER ? <MovieDetails /> : <Navigate to={'/auth'} /> } />
            </Route>
        )
    );

    return router;
}

export default useRoutes