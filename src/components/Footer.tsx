import phone from "../assets/phone.png"
import mail from "../assets/mail.png"
import linkedin from "../assets/linkedin.png"
import adress from "../assets/adress.png"
import "../css/components/Footer.css"

const Footer = () => {
    return (<div className="footer">
        <div className="left-center-footer">
            <p><img className='iconFooterImage' src={phone} alt="phone" /> +40741503030</p>
            <p><img className='iconFooterImage' src={mail} alt="mail" /> ralucatritean@gmail.com</p>
            <p><img className='iconFooterImage' src={linkedin} alt="linkedin" /><a href="https://www.linkedin.com/in/raluca-georgiana-grama/" >Grama Raluca</a></p>
            <p><img className='iconFooterImage' src={adress} alt="adress" /> Târgu Mureș, Mureș, Romania</p>
        </div>
    </div>
    );
}

export default Footer;