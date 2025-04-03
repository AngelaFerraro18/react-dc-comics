import Logo from "./Logo";
import Menu from "./Menu";

//creo la funzione che mi identificherà l'header del documento
function Header() {
    return (<header className="container">
        <Logo />
        <Menu />
    </header>);
};

//esporto la funzione header
export default Header;