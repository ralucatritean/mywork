import CV from "../../assets/cv.png"
import Movie from "../../assets/movie.png"
import Ttt from "../../assets/tictactoe.png"
import Mg from "../../assets/memory.jpg"
import Shop from "../../assets/shop.png"

export const SidebarData = [
    {
        title: "CV",
        icon: <img className='iconImage' src={CV} alt="CV Icon" />,
        link: "/myCvPage",      
        path: "myCvPage"        
    },
    {
        title: "Movie",
        icon: <img className='iconImage' src={Movie} alt="Movie" />,
        link: "/movie",         
        path: "movie"          
    },
    {
        title: "TicTacToe",
        icon: <img className='iconImage' src={Ttt} alt="Movie" />,
        link: "/tictactoe",         
        path: "tictactoe"         
    },{
        title: "Memory Game",
        icon: <img className='iconImage' src={Mg} alt="Memory" />,
        link: "/memorygame",         
        path: "memorygame"           
    },
    {
        title: "Shop",
        icon: <img className='iconImage' src={Shop} alt="Shop" />,
        link: "/shop",         
        path: "shop"           
    },
];