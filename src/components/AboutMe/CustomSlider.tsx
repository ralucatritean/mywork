import React, { useEffect, useState } from 'react';
import "../../css/components/AboutMe/Carousel.css";
import left from "../../assets/left.png"
import right from "../../assets/right.png";

const CustomSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    const items = [
        {
            id: 1,
            title: "Anii de liceu: O perioadă de explorare și leadership",
            content: "Anii de liceu au fost o perioadă de explorare și autodescoperire. Am urmat profilul Matematica-Informatica intensiv Informatica, experimentând diverse domenii în paralel. Am jucat în piesele de teatru Shoes și Want, am făcut practică la un cabinet veterinar, influențată de dragostea pentru câini, și mi-am dezvoltat abilitățile de leadership, devenind lider Avon la 18 ani. În clasa a 12-a, lucrând la atestatul de informatică și creând o pagină web despre câini, am descoperit pasiunea pentru dezvoltarea web. Această experiență, combinată cu pregătirea solidă în matematică și informatică, m-a îndrumat cu încredere spre facultatea de informatică.",
        },
        {
            id: 2,
            title: "De la web la jocuri educative: O nouă direcție",
            content: "Anii de facultate au fost o perioadă de explorare intensă în lumea programării, unde am avut șansa să experimentez cu diverse tehnologii și domenii. De la dezvoltarea de aplicații desktop la baze de date si inteligență artificială, fiecare materie mi-a oferit o nouă perspectivă asupra a ceea ce poate face tehnologia. Deși inițial visam să mă specializez în web development, am descoperit treptat farmecul fiecărui domeniu. Apogeul acestei călătorii a venit odată cu proiectul de licență, unde am îmbinat toate cunoștințele acumulate pentru a crea un joc educativ interactiv. Acesta ajută copiii să învețe principiile programării într-un mod distractiv, ghidând un iepuraș prin diverse provocări folosind comenzi simple de programare. Acest proiect nu doar că mi-a confirmat pasiunea pentru programare, dar mi-a deschis și ochii către o nouă direcție - dezvoltarea de jocuri educative"
        }, {
            id: 3,
            title: "Primul job: Călătoria în lumea game development-ului",
            content: "Cei aproape patru ani în dezvoltarea jocurilor au fost transformatori. Am evoluat de la tester la backend developer și apoi la full stack developer în Unity. În echipa de mentenanță, am gestionat un portofoliu de 30 de jocuri pe patru platforme, contribuind la sisteme de in-app purchases, animații, interfețe și implementarea de features complete. Un moment definitoriu a fost selecția unuia dintre jocurile noastre pentru Apple Arcade, unde am făcut parte din echipa dedicată. Experiența a fost îmbogățită de colaborarea cu o echipă tânără și pasionată, ale cărei abilități complementare ne-au permis să gestionăm cu succes provocările complexe și să le transformăm în oportunități de creștere"
        },
        {
            id: 4,
            title: "Viitor: Întoarcerea la prima dragoste - Web Development",
            content: "Recent, am realizat că deși web development-ul a fost prima mea dragoste în programare, nu i-am acordat niciodată șansa să se dezvolte cu adevărat. Experiența în dezvoltarea jocurilor a fost extraordinară și m-a format ca profesionist, dar am simțit că e momentul să mă întorc și să explorez acea pasiune inițială care m-a adus în lumea programării. Deși a fost o decizie care a venit cu emoții și incertitudini, procesul de creare a propriului portofoliu mi-a reconfirmat că acum este momentul perfect să urmez această cale. Sunt entuziasmată să îmbin experiența acumulată în dezvoltarea jocurilor cu noile provocări din domeniul web development-ului, știind că această combinație unică de experiențe îmi va permite să aduc o perspectivă diferită în proiectele viitoare."
        },
        {
            id: 5,
            title: "Pe scurt: Portret personal și profesional",
            content: "Sunt o persoană care îmbină pasiunea pentru tehnologie cu dragostea pentru natură și animale, căutând mereu să învăț lucruri noi și să mă dezvolt. Creativitatea mea se manifestă atât în cod, cât și în proiectele personale, fie că e vorba de un goblen nou sau de o soluție tehnică inovatoare. Un moment definitoriu care mi-a conturat abilitățile de leadership a fost în 2023, când am obținut locul 27 la nivel național în competiția Supernova, un top al celor mai buni lideri din țară. Această realizare este o reflecție a determinării, priceperii și capacității mele de a conduce și inspira o echipă încă de la o vârstă fragedă. Experiența mea ca lider Avon m-a format ca o persoană deschisă, capabilă să vorbesc în fața unui public - și deși emoțiile sunt încă prezente, am învățat să le transform în energie pozitivă. Această experiență timpurie în coordonarea unei echipe m-a învățat importanța strategiei și a planificării atente pentru atingerea obiectivelor. Sunt o persoană care îmbină sensibilitatea emoțională cu gândirea analitică, știind când să mă las ghidată de intuiție și când să adopt o abordare calculată. Cred în puterea echipei și în importanța relațiilor autentice, fie că e vorba de colegii de muncă sau de familia mea. Sunt determinată să-mi urmez visele, chiar dacă asta înseamnă să ies din zona de confort, așa cum o demonstrează recenta mea tranziție către dezvoltarea web. Dar mai presus de toate, sunt o fire nonconformistă care adoră să îmbine elementele aparent contrare ale vieții într-un mod unic și personal."
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 800;
            setIsMobile(mobile);
            if (mobile) {
                setCurrentIndex(0);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (isMobile) return;
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isMobile) return;
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (isMobile) return;
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        }

        if (isRightSwipe) {
            prevSlide();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div className="slider-root">
            <button
                className="go-to-summary-button"
                onClick={() => setCurrentIndex(4)}
            >
                Mergi la rezumat
            </button>
            <div className="slider-wrapper">
                <div>
                    <button
                        onClick={prevSlide}
                        className="slider-nav-button prev"
                        aria-label="Previous slide">
                        <img className='iconArrow' src={left} />
                    </button>

                </div>
                <div
                    className="slider-content"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className={`slider-item ${index === currentIndex ? 'show' : ''}`}
                        >
                            <div className="slider-item-content">
                                <h2 className="slider-title">{item.title}</h2>
                                <p className="slider-description">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <button
                        onClick={nextSlide}
                        className="slider-nav-button next"
                        aria-label="Next slide" >
                        <img className='iconArrow' src={right} />
                    </button>
                </div>

            </div>



        </div>
    );
};

export default CustomSlider;