import "../css/MyCv.css"
import Footer from "../components/Footer";
import Container from "../components/Container";
import Header from "../components/Header";
import ContentItem from "../components/MyCv/ContentItem";

function MyCvPage() {
    return (
        <Container>
            <Header title="Grama Raluca-Georgiana" subTitle="Game Developer" />
            <div className="containerCv">
                <div className="left-column">
                    <ContentItem title="SUMAR PROFESIONAL" texts={["<b>Game developer</b> cu peste 3 ani de experiență, membru al echipei responsabile de un portofoliu de peste 25 de jocuri mobile. Specializată în Unity și C#, cu expertiză în optimizarea performanței, implementarea sistemelor de gameplay și integrarea serviciilor backend. Demonstrez abilități solide de depanare, refactorizare cod și colaborare eficientă cu echipe de artiști și designeri.",
                        "Complementar, am dezvoltat abilități solide de leadership ca Manager în vânzări directe, coordonând cu succes o echipă de peste 40 de persoane la Avon Cosmetics România, unde am implementat strategii eficiente de dezvoltare și motivare a echipei."
                    ]} />
                    <ContentItem title="PROIECTE" texts={["În perioada 2021-2023, ca  <b>Game Developer Unity</b>, am dezvoltat jocuri complexe utilizând platforma Unity și limbajul de programare C#, implementând sisteme avansate de gameplay și mecanici interactive care au îmbunătățit semnificativ experiența utilizatorului. Am optimizat performanța aplicațiilor și am efectuat debugging pentru asigurarea unei funcționări optime, colaborând eficient cu echipe  de artiști și designeri pentru integrarea  asset-urilor.",
                        " În cadrul <b>DVSE Workshop 2020</b>, am dezvoltat o platformă completă de e-commerce cu funcționalități avansate, implementând un sistem de coș de cumpărăturit. Am creat un sistem eficient de management al produselor, utilizând tehnologii moderne precum React.js, TypeScript, C# și Git, punând accent pe dezvoltarea unei arhitecturi scalabile și optimizarea experienței utilizatorului.",
                        "În continuarea dezvoltării mele profesionale, mi-am creat un portofoliu digital folosind <b>React și TypeScript</b>, demonstrând abilități de dezvoltare front-end și proiectare de interfețe moderne. Proiectul reflectă competențele mele tehnice în proces de consolidare, fiind un mediu prin care continui să învăț și să-mi aprofundez cunoștințele în aceste limbaje și framework-uri."
                    ]} />
                    <ContentItem title="Pasiuni & Hobby-uri:" texts={[
                        "<li>Practicarea activităților în aer liber</li>",
                        "<li>Activități creative și crafting</li>",
                        "<li>Iubitoare de câini</li>",
                        "<li>Pasionat de teatru, film și artă</li>",
                        "<li>Focus constant pe dezvoltare personală și profesională</li>"
                    ]} />

                </div>

                <div className="right-column">
                    <ContentItem title="EXPERIENȚĂ PROFESIONALĂ" texts={[
                        "<b>Game Developer | Quadom  Feb 2021 - Nov 2024</b>",
                        "<li>Mentenanță și optimizare pentru portofoliu de peste 25 de jocuri mobile active </li>",
                        "<li>Dezvoltare și implementare funcționalități pentru backend și frontend în Unity </li>",
                        "<li>Optimizare performanță și implementare mecanici de joc complexe</li>",
                        "<li>Colaborare cu echipele de design pentru îmbunătățirea experienței utilizatorului</li>",
                        "<li>Implementare și testare funcționalități pentru multiple platforme</li>",
                        "<b>Coordonator Manager| Avon Cosmetics România Iulie 2016 – prezent</b>",
                        "<li>Coordonare echipă de 40+ persoane în vânzări directe</li>",
                        "<li>Stabilire strategii de vânzări și motivare a echipei</li>",
                        "<li>Organizare evenimente și campanii de promovare</li>",
                        "<li>Dezvoltare și menținere relații cu clienții</li>"
                    ]} />
                    <br />

                    <ContentItem title="EDUCAȚIE" texts={[
                        "<b>UMFST George Emil Palade Târgu Mureș|Licență în Informatică (2017-2020)</b>",
                        "<li>Am dezvoltat competențe avansate în programare și gestionarea bazelor de date, cu focus pe proiectarea și dezvoltarea aplicațiilor informatice</li>",
                        "<li>Am dobândit expertiză în inteligență artificială și rețele de calculatoare, aplicând aceste cunoștințe în rezolvarea problemelor din mediul real</li>",
                        "<li>Am demonstrat abilități excelente de lucru în echipe interdisciplinare, adaptându-mă eficient la cerințele dinamice ale proiectelor</li>",
                        "<li>Am aplicat cunoștințele dobândite în cadrul internshipurilor</li>",
                        "<br/><b>Colegiul Național Alexandru Papiu Ilarian | 2013-2017|  Matematică-Informatică intensiv Informatică</b>",
                        "<li>Atestat în informatică</li>",
                        "<li>Dezvoltare abilități analitice și gândire critică</li>",
                        "<b> <li>Voluntariat:</li><b/>",
                        "<li>Teatrul Național Târgu Mureș: Participare la spectacolele Shoes (2014-2015) și Want (2015-2016)</li>",
                        "<li>Campania In My Shoes</li>",
                        "<li>Avon: Cruciada împotriva Cancerului de Sân și Stop Violenței Împotriva Femeilor</li>",
                        "<li>Proiecte: POSDRU - Dezvoltare EU Activă prin Tranziție Activă - echipa câștigătoare a premiului I la competiția națională</li>",
                        "<li>Practică profesională: SC PETKIT PRO SRL (2016-2017) - Administrare cabinet veterinar și suport în proceduri medicale sub supraveghere</li>"
                    ]} />
                    <br />
                    <ContentItem title="Workshop/Stagii de Practică " texts={[
                        "2018 | Stagiu de Practică | Anvico S.A., Târgu Mureș (40 ore)",
                        "2018 | Stagiu de Practică | Reea S.R.L., Târgu Mureș (40 ore)",
                        "2020 | Workshop DVSE RO (30 ore)"
                    ]} />

                    <div className="small-container">
                        <div className="left-column">
                            <ContentItem title="CORE SKILLS" texts={[
                                "<li>Gândire analitică și critică</li>",
                                "<li>Abilități excelente de comunicare</li>",
                                "<li>Organizare și management de proiect</li>",
                                "<li>Rezolvare de probleme complexe</li>",
                                "<li>Creativitate în dezvoltare</li>",
                                " <li>Adaptabilitate la tehnologii noi</li>"
                            ]} />
                        </div>
                        <div className="right-column">
                            <ContentItem title="COMPETENȚE TEHNICE" texts={[
                                "<li>Game Development: Unity 2D, C#</li>",
                                "<li>Web: HTML, CSS, JavaScript, TypeScript, React.js, Redux, Bootstrap, WordPress</li>",
                                "<li>Databases: SQL</li>",
                                " <li>Version Control: Git</li>"
                            ]} />
                        </div>
                    </div>
                </div> </div>
            <Footer />
        </Container>
    );
};

export default MyCvPage;