import CV from "../../assets/cv.png"
import Movie from "../../assets/movie.png"

export const SidebarData = [
    {
        title: "CV",
        icon: <img className='iconImage' src={CV} alt="CV Icon" />,
        link: "/myCvPage",      // adăugăm slash
        path: "myCvPage"        // adăugăm un nou câmp pentru verificarea path-ului
    },
    {
        title: "Movie",
        icon: <img className='iconImage' src={Movie} alt="Movie" />,
        link: "/movie",         // adăugăm slash
        path: "movie"           // adăugăm un nou câmp pentru verificarea path-ului
    },
];