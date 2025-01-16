import { FormEvent, useState, useEffect } from "react";
import MovieCard from "./MovieCard"
import NavBar from "./NavBar";
import '/src/css/Movie.css';
import { getPopularMovies, searchMovies } from '../../services/api';
import { MovieProps } from "../../context/MovieContext";

function Home() {
    const [searchQuery, setSearchQuesry] = useState("");
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Fail to load movies...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])
    const handleSearch = async (e: FormEvent) => {
        e.preventDefault()
        if (!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true)
        try {
            const searchReasults = await searchMovies(searchQuery)
            setMovies(searchReasults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
        setSearchQuesry("");

    };
    return <div className="home">
        <NavBar />
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search for movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuesry(e.target.value)}
            />
            <button type="submit" className="search-btn">
                Search
            </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
            <div className="loading">Loading...</div>

        ) : (
            < div className="movies-grid">
                {movies.map((movie =>
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        )}
    </div >
}
export default Home;