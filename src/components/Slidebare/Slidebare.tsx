import  { ReactNode, useContext } from 'react'
import { SidebarData } from "./SlidebarData"
import MyProfile from './MyProfile';
import MenuButton from './MenuButton';
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

    // Funcție pentru a verifica path-ul curent
    const isActivePath = (itemPath: string) => {
        // Eliminăm basename-ul "/mywork" și slash-ul inițial pentru comparație
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
            <div>
                <MyProfile/>
            </div>
            <ul className='SidebarList'>{
                SidebarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className={`row ${isOpen ? 'openRow' : 'closeRow'}`}
                            id={isActivePath(val.path) ? "active" : ""}
                            onClick={() => {
                                navigate(val.link);
                                console.log("Navigating to:", val.link); // pentru debugging
                            }}
                        >
                            <div id='icon'>{val.icon}</div>{" "}
                            <div id='title'>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;