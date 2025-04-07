import Logo from "./Logo";
import Menu from "./Menu";

//creo la funzione che mi identificherà l'header del documento
function Header() {

    //creo l'array di oggetti dove ho impostato due proprietà: link, url
    const linkList = [
        {
            link: 'Characters',
            url: '/'
        },
        {
            link: 'Comics',
            url: '/'
        },
        {
            link: 'Movies',
            url: '/'
        },
        {
            link: 'Tv',
            url: '/'
        },
        {
            link: 'Games',
            url: '/'
        },
        {
            link: 'Collectibles',
            url: '/'
        },
        {
            link: 'Videos',
            url: '/'
        },
        {
            link: 'Fans',
            url: '/'
        },
        {
            link: 'News',
            url: '/'
        },
        {
            link: 'Shop',
            url: '/'
        }
    ]


    return (<header >
        <div className="container">
            <Logo />

            {/* ho impostato all'interno del mio componente l'attributo linkList e vi ho assegnato l'array che ho creato precedentemente */}
            <Menu linkList={linkList} />
        </div>
    </header>);
};

//esporto la funzione header
export default Header;