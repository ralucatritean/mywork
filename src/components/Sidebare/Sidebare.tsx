import { ReactNode, useContext } from 'react'
import { SidebarData } from "./SlidebarData"
import MyProfile from './MyProfile';
import MenuButton from './MenuButton';
import '../../css/Sidebare.css'
import { SidebarContext } from '../../context/SlidebarContext';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
    children?: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const navigate = useNavigate();
    const location = useLocation();

    const toggle = () => setIsOpen(!isOpen);
    const handleNavigation = (link: string) => {
        navigate(link);
        if (window.innerWidth < 520) {
            setIsOpen(false);  // Adaugă această linie
        }
    };

    const isActivePath = (itemPath: string) => {
        const currentPath = location.pathname.replace('/mywork', '');
        return currentPath === `/${itemPath}`;
    };

    return (
        <div className={`Sidebar ${isOpen ? 'openMenu' : 'closemenu'}`}>
            <div className='topMenu'>
                <button onClick={toggle} className='buttonMenu'>
                    <MenuButton />
                </button>
            </div>
            <div className='sideContent'>
                <MyProfile />
                <ul className='SidebarList'>{
                    SidebarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className={`row ${isOpen ? 'openRow' : 'closeRow'}`}
                                id={isActivePath(val.path) ? "active" : ""}
                                onClick={() => {
                                    handleNavigation(val.link);
                                }}
                            >
                                <div id='icon'>{val.icon}</div>{" "}
                                <div className="sidebar-text" id='title'>{val.title}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div>{children}</div>
        </div>
    );
};

export default Sidebar;