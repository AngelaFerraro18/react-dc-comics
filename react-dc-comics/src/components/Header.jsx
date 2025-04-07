import Logo from "./Logo";
import MenuHeader from "./Menu";
// import Menu from "./Menu";

//creo la funzione che mi identificherà l'header del documento
function Header() {

    //creo l'array di oggetti dove ho impostato due proprietà: link, url
    const linkList = [
        {
            id: '1',
            link: 'Characters',
            url: '/'
        },
        {
            id: '2',
            link: 'Comics',
            url: '/'
        },
        {
            id: '3',
            link: 'Movies',
            url: '/'
        },
        {
            id: '4',
            link: 'Tv',
            url: '/'
        },
        {
            id: '5',
            link: 'Games',
            url: '/'
        },
        {
            id: '6',
            link: 'Collectibles',
            url: '/'
        },
        {
            id: '7',
            link: 'Videos',
            url: '/'
        },
        {
            id: '8',
            link: 'Fans',
            url: '/'
        },
        {
            id: '9',
            link: 'News',
            url: '/'
        },
        {
            id: '10',
            link: 'Shop',
            url: '/'
        }
    ]


    return (<header >
        <div className="container">
            <Logo />

            {/* ho impostato all'interno del mio componente l'attributo linkList e vi ho assegnato l'array che ho creato precedentemente */}
            <MenuHeader linkList={linkList} />
        </div>
    </header>);
};

//esporto la funzione header
export default Header;