import { SidebarContext } from "../context/SlidebarContext";
import { useContext } from "react";
import "../css/components/Container.css";

interface ContainerProps{
    children: React.ReactNode
}

const Container:React.FC<ContainerProps> = ({children}) => {
    const { isOpen } = useContext(SidebarContext);

    return ( <div className={` contentPage ${isOpen ? 'openContainer' : 'closeContainer abmcontent'}`}>
        {children}
    </div> );
}
 
export default Container;