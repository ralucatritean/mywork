import { SidebarContext } from "../context/SlidebarContext";
import { useContext } from "react";
import "../css/AboutMe.css"

function AboutMe() {
    const { isOpen } = useContext(SidebarContext);

    return (
        <div className={` contentAMPage ${isOpen ? 'openContainer' : 'closeContainer mccontent'}`}>
            <div className="am-header">
                <h1>About me</h1>
                <h1>Grama Raluca Georgiana</h1>
            </div>

        </div>
    );
};

export default AboutMe;