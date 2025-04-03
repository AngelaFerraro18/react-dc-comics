import LogoBG from "./LogoBG";
import MenuFooter from "./MenuFooter";
import facebookIcon from "../assets/img/footer-facebook.png";
import twitterIcon from "../assets/img/footer-facebook.png";
import youtubeIcon from "../assets/img/footer-youtube.png";
import pinterestIcon from "../assets/img/footer-pinterest.png";
import periscopeIcon from "../assets/img/footer-periscope.png";

//creo la funzione che mi identificherà il footer del documento
function Footer() {
    return (<footer>
        <MenuFooter />
        <LogoBG />
        <button>Sign-up Now</button>
        <h3 className="container">Follow Us</h3>
        <ul className="container">
            <li><img src={facebookIcon} alt="facebook-icon" /></li>
            <li><img src={twitterIcon} alt="twitter-icon" /></li>
            <li><img src={youtubeIcon} alt="youtube-icon" /></li>
            <li><img src={pinterestIcon} alt="pinterest-icon" /></li>
            <li><img src={periscopeIcon} alt="periscope-icon" /></li>
        </ul>
    </footer>);
};

//esporto la funzione Footer
export default Footer;