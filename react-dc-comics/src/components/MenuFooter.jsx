import LogoBG from "./LogoBG";

//creo la funzione per il menu del footer
function MenuFooter() {
    return (<div className="container-box-list">
        <div className="menu-footer container">
            <div className="d-flex">
                <ul>
                    <h2>DC Comics</h2>
                    <li>Characters</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>TV</li>
                    <li>Games</li>
                    <li>Videos</li>
                    <li>News</li>


                    <h2>Shop</h2>
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>
                </ul>
                <ul>
                    <h2>DC</h2>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy(New)</li>
                    <li>Ad Choices</li>
                    <li>Advertising</li>
                    <li>Jobs</li>
                    <li>Subscriptions</li>
                    <li>Talent Workshops</li>
                    <li>CPSC Certificates</li>
                    <li>Ratings</li>
                    <li>Shop Help</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <h2>Sites</h2>
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                </ul>
            </div>
            <LogoBG />

        </div>
    </div>
    )
}

//esporto
export default MenuFooter;