import { Outlet } from 'react-router-dom'
import { MovieProvider } from "../context/MovieContext";
import { SidebarContext } from "../context/SlidebarContext";
import { useContext } from "react";

function Movie() {
    const { isOpen } = useContext(SidebarContext);

    return (
        <div className={`contentPage ${isOpen ? 'openContainer' : 'closeContainer'}`}>
            <MovieProvider>
                <div className="content">
                    <Outlet />
                </div>
            </MovieProvider>
        </div>
    );
}

export default Movie;