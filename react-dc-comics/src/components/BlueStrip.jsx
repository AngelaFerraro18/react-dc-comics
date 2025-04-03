import digitalComics from "../assets/img/buy-comics-digital-comics.png";
import digitalMerchandise from "../assets/img/buy-comics-merchandise.png";
import digitalShop from "../assets/img/buy-comics-shop-locator.png";
import digitalSubscriptions from "../assets/img/buy-comics-subscriptions.png";
import digitalPowerVisa from "../assets/img/buy-dc-power-visa.svg";

//creo la funzione che raggruppa la lista di icone
function BlueStrip() {
    return (<ul>
        <li><img src={digitalComics} alt="digital-comics" />Digital Comics</li>
        <li><img src={digitalMerchandise} alt="merchandise" />DC Merchandise</li>
        <li><img src={digitalShop} alt="shop" />Subscriptions</li>
        <li><img src={digitalSubscriptions} alt="subscriptions" />Comic Shop Locator</li>
        <li><img src={digitalPowerVisa} alt="power-visa" />DC Power Visa</li>
    </ul>)
}

export default BlueStrip;