import React, { useState } from 'react';
import '../../css/Carousel.css';
import left from "../../assets/left.png"
import right from "../../assets/right.png";

const CustomSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const items = [
        {
            id: 1,
            title: "De la matematică la informatică: Primii pași în carieră",
            content: "Mă numesc Grama Raluca, am 26 de ani, iar pasiunea mea pentru tehnologie își are rădăcinile într-o inspirație timpurie - profesoara mea de matematică din gimnaziu. Ea m-a inspirat atât de mult încât visam să devin la rândul meu profesoară de matematică, motiv pentru care am ales profilul Matematică-informatică intensiv informatică în liceu. "
        },
        {
            id: 2,
            title: "Anii de liceu: O perioadă de explorare și leadership",
            content: "Anii de liceu au fost o perioadă de explorare și autodescoperire: am experimentat diverse domenii, de la artele spectacolului (unde am jucat în două piese de teatru, Shoes și Want) până la practica în medicina veterinară - aceasta din urmă fiind influențată de dragostea mea pentru câini. În paralel, am descoperit și abilitățile mele de leadership, începând ca reprezentant Avon și evoluând, la 18 ani, în poziția de lider, unde am avut oportunitatea să-mi creez și să coordonez propria echipă. Revelația legată de viitorul meu profesional a venit în clasa a 12-a când, lucrând la atestatul de informatică și creând o pagină web despre câini, am descoperit fascinația pentru dezvoltarea web și mi-am dat seama că acesta este drumul meu. Această descoperire m-a îndrumat cu încredere spre facultatea de informatică."
        },
        {
            id: 3,
            title: "De la web la jocuri educative: O nouă direcție",
            content: "Anii de facultate au fost o perioadă de explorare intensă în lumea programării, unde am avut șansa să experimentez cu diverse tehnologii și domenii. De la dezvoltarea de aplicații desktop la machine learning, de la baze de date la inteligență artificială, fiecare materie mi-a oferit o nouă perspectivă asupra a ceea ce poate face tehnologia. Deși inițial visam să mă specializez în web development, am descoperit treptat farmecul fiecărui domeniu. Apogeul acestei călătorii a venit odată cu proiectul de licență, unde am îmbinat toate cunoștințele acumulate pentru a crea un joc educativ interactiv. Acesta ajuta copiii să învețe principiile programării într-un mod distractiv, ghidând un iepuraș prin diverse provocări folosind comenzi simple de programare. Acest proiect nu doar că mi-a confirmat pasiunea pentru programare, dar mi-a deschis și ochii către o nouă direcție - dezvoltarea de jocuri educative"
        }, {
            id: 4,
            title: "Primul job: Călătoria în lumea game development-ului",
            content: "Cei aproape patru ani petrecuți în dezvoltarea jocurilor au fost extraordinari și transformatori. Am început ca tester, unde am învățat importanța calității și atenției la detalii în dezvoltarea produselor. După doar două luni, am avut oportunitatea să trec în echipa de backend, unde am descoperit complexitatea din spatele jocurilor. Evoluția mea a continuat natural spre rolul de full stack developer în Unity și C#, lucrând într-o echipă de mentenanță responsabilă pentru un portofoliu de 30 de jocuri pe 4 platforme diferite. Am contribuit la diverse aspecte ale dezvoltării: am colaborat cu echipa la mentenanța și îmbunătățirea sistemelor de in-app purchases, am creat animații, am lucrat pe interfețe și am implementat features complete. Un moment definitoriu în cariera mea a fost în ultimul an, când unul dintre jocurile noastre a fost selectat pentru Apple Arcade, iar eu am avut privilegiul să fiu aleasă în echipa dedicată acestui proiect. Ceea ce a făcut această experiență cu adevărat specială a fost echipa extraordinară din care am făcut parte - un grup de profesioniști tineri și pasionați, fiecare cu propriile sale calități unice. Chimia dintre noi și modul în care ne completam reciproc abilitățile ne-au permis să gestionăm cu succes acest portofoliu complex de jocuri, transformând fiecare provocare într-o oportunitate de creștere."
        },
        {
            id: 5,
            title: "Viitor: Întoarcerea la prima dragoste - Web Development",
            content: "Recent, am realizat că deși web development-ul a fost prima mea dragoste în programare, nu i-am acordat niciodată șansa să se dezvolte cu adevărat. Experiența în dezvoltarea jocurilor a fost extraordinară și m-a format ca profesionist, dar am simțit că e momentul să mă întorc și să explorez acea pasiune inițială care m-a adus în lumea programării. Deși a fost o decizie care a venit cu emoții și incertitudini, procesul de creare a propriului portofoliu mi-a reconfirmat că acum este momentul perfect să urmez această cale. Sunt entuziasmată să îmbin experiența acumulată în dezvoltarea jocurilor cu noile provocări din domeniul web development-ului, știind că această combinație unică de experiențe îmi va permite să aduc o perspectivă diferită în proiectele viitoare."
        },
        {
            id: 6,
            title: "Pasiuni: O viață trăită colorat",
            content: "Viața mea e plină de pasiuni care m-au dus pe căi neașteptate. În liceu, explorând lumea teatrului prin piesele 'Shoes' și 'Want', am avut șansa să-l întâlnesc pe Paul, cel care avea să-mi devină soț. Pe măsură ce ne-am cunoscut mai bine, am descoperit că împărtășim aceeași dragoste pentru câini - el având deja o cățelușă. De-a lungul anilor, această pasiune comună s-a transformat într-o aventură frumoasă - acum avem propria canisă de Cane Corso, iar vedeta canisei noastre este Shaq, unicul dintre câinii noștri care se bucură de privilegiul de a fi companion permanent în casă și în toate aventurile noastre. Verile ni le petrecem în natură, practicând pescuitul sportiv - un hobby unde mă pot mândri cu capturarea unui crap comun de 14 kg. În momentele de liniște, îmi place să mă refugiez în lectură, să mă las purtată de muzică, iar cea mai recentă descoperire care îmi aduce relaxare este cusutul goblenurilor - o activitate care, deși sunt doar la primul proiect, mi-a dovedit că răbdarea și atenția la detalii pot crea lucruri minunate. Poate cel mai bine ne definește ca familie decizia de a combina toate pasiunile noastre în pozele de after wedding - realizate pe lacul nostru favorit de pescuit, având alături credinciosul nostru Shaq."
        },
        {
            id: 7,
            title: "Pe scurt: Portret personal și profesiona",
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

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
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
                onClick={() => setCurrentIndex(6)}
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