import NavBar from "./NavBar";
import '/src/css/Movie.css';
import { useMovieContext, MovieProps } from "../../context/MovieContext";
import MovieCard from "./MovieCard";
import { useState, useEffect } from 'react';
import { searchMovieById } from "../../services/api";

function Favorite() {
    const { favorites } = useMovieContext();
    const [moviesWithDetails, setMoviesWithDetails] = useState<MovieProps[]>([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const detailedMovies = await Promise.all(
                    favorites.map(async (movieId) => {
                        const response = await searchMovieById(movieId);
                        console.log("Raspuns API pentru ID", movieId, ":", response);
                        
                        const data = response?.data || response;

                        if (!data) {
                            console.error("Nu am primit date pentru filmul cu ID:", movieId);
                            return null;
                        }

                        return {
                            id: movieId,
                            title: data.title || 'Titlu necunoscut',
                            url: data.homepage || '',
                            release_date: data.release_date || 'Data necunoscuta',
                            poster_path: data.poster_path || ''
                        };
                    })
                );

                const validMovies = detailedMovies.filter((movie): movie is MovieProps => movie !== null);
                setMoviesWithDetails(validMovies);
            } catch (error) {
                console.error("Eroare la preluarea detaliilor filmelor:", error);
            }
        };

        if (favorites && favorites.length > 0) {
            fetchMovieDetails();
        }
    }, [favorites]);

    if (favorites.length > 0) {
        return (
            <div className="home">
                <NavBar />
                <div className="favorites-content">
                    <div className="movies-grid">
                        {moviesWithDetails.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                </div>
            </div>

        );
    } else {
        return (
            <div className="home">
                <NavBar />
                <div className="favorites-content">

                    <h2>Nici un film adaugat la favorite</h2>
                    <p>Incepe sa aduagi filme la favorite si vor aparea aici</p>
                </div>
            </div>

        );
    }
}

export default Favorite;