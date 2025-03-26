import { Outlet } from 'react-router-dom'
import { MovieProvider } from "../context/MovieContext";
import { SidebarContext } from "../context/SlidebarContext";
import { useContext } from "react";
import Container from '../components/Container';

function Movie() {
    const { isOpen } = useContext(SidebarContext);

    return (
        <Container isBlack>
                <MovieProvider>
                    <div className="content">
                        <Outlet />
                    </div>
                </MovieProvider>
        </Container>


    );
}

export default Movie;