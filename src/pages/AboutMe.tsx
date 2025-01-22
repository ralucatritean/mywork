import { SidebarContext } from "../context/SlidebarContext";
import { useContext } from "react";
import "../css/AboutMe.css"
import "../css/MyCv.css"
import Carousel from "../components/AboutMe/Carousel";
import CustomSlider from "../components/AboutMe/CustomSlider";

function AboutMe() {
    const { isOpen } = useContext(SidebarContext);

    return (
        <div className={` contentPage ${isOpen ? 'openContainer' : 'closeContainer abmcontent'}`}>'
            <div className="aboutMe-container">
                <div className="header">
                    <h1>Grama Raluca Georgiana</h1>
                </div>
                
                <Carousel/>
                <CustomSlider />


            </div>

        </div>
    );
};

export default AboutMe;