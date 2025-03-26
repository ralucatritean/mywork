
import "../css/MyCv.css"
import Carousel from "../components/AboutMe/Carousel";
import CustomSlider from "../components/AboutMe/CustomSlider";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

function AboutMe() {
    return (
        <Container>
            <Header title="Grama Raluca-Georgiana" />
            <Carousel />
            <CustomSlider />
            <Footer />
        </Container>


    );
};

export default AboutMe;