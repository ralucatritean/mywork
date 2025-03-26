import { SidebarContext } from "../context/SlidebarContext";
import { useContext } from "react";
import "../css/components/Container.css";

interface ContainerProps {
    children: React.ReactNode
    isBlack?: boolean
}

const Container: React.FC<ContainerProps> = ({ children,isBlack }) => {
    const { isOpen } = useContext(SidebarContext);

    return (<div className={` contentPage 
    ${isOpen ? 'openContainer' : 'closeContainer abmcontent'}
    ${isBlack? 'black-Background' : 'white-Background'}
    `}>
        {children}
    </div>);
}

export default Container;