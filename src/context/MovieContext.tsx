import { createContext, useState, useContext, useEffect, PropsWithChildren } from "react"

export interface MovieProps {
    id: string;
    url: string;
    title: string;
    release_date: string;
    poster_path: string;
}

// Interfața pentru context
interface MovieContextType {
    favorites: string[];  // lista de id-uri
    isFavorite: (movieId: string) => boolean;
    setFavorites: (favorites: string[]) => void;
    addToFavorites: (movieId: string) => void;
    removeFromFavorites: (movieId: string) => void;
}

const MovieContext = createContext<MovieContextType>({
    favorites: [],
    isFavorite: () => false,
    setFavorites: () => {},
    addToFavorites: () => {},
    removeFromFavorites: () => {}
});

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])  // Corectat sintaxa

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie: string) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId: string) => {
        setFavorites(prev => prev.filter(movie => movie !== movieId))  // Simplificat condiția
    }

    const isFavorite =(movieId:string) =>{
        return favorites.some(movie =>movie === movieId)
    }

    return <MovieContext.Provider value={{
        favorites,
        isFavorite,  // Folosim state-ul real
        setFavorites,  // Folosim funcția reală
        addToFavorites,  // Adăugat funcția
        removeFromFavorites  // Adăugat funcția
    }}>
        {children}
    </MovieContext.Provider>
}