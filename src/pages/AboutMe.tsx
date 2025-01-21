import { SidebarContext } from "../context/SlidebarContext";
import { useContext } from "react";
import "../css/AboutMe.css"
import "../css/MyCv.css"
import Carousel from "../components/AboutMe/Carousel";
import CustomSlider from "../components/AboutMe/CustomSlider";

function AboutMe() {
    const { isOpen } = useContext(SidebarContext);

    return (
        <div className={` contentPage ${isOpen ? 'openContainer' : 'closeContainer mccontent'}`}>'
                <div className="header">
                    <h1>Grama Raluca Georgiana</h1>
                    <p>Game Developer</p>
                    <button></button>
                </div>
                <div className="aboutMe-container">

                <CustomSlider />
                <Carousel />


            </div>

        </div>
    );
};

export default AboutMe;