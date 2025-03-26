import { Outlet } from 'react-router-dom'
import { MovieProvider } from "../context/MovieContext";
import Container from '../components/Container';

function Movie() {
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