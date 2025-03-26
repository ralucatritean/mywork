import '/src/css/Movie.css';
import { Link, useLocation } from 'react-router-dom'; // Adăugăm useLocation
import '../../css/App.css'

function NavBar() {
    const location = useLocation(); // Folosim hook-ul useLocation

    // Funcție pentru a verifica path-ul activ
    const isActivePath = (path: string) => {
        const currentPath = location.pathname.replace('/mywork', '');
        return currentPath === path;
    };

    return (
        <div className='navbar-content'>
            <ul className="breadcrumb">
                <li>
                    <Link to="/movie" className={isActivePath('/movie') ? 'active' : ''}>
                        Home</Link>
                </li>
                <li><span> {'>'} </span></li>
                <li>
                    <Link to="/movie/favorites" className={isActivePath('/movie/favorites') ? 'active' : ''}>
                        Favorite </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;