import LogoBG from "./LogoBG";
import ListDCComics from "./MenuListDcComics";
import ListShop from "./MenuShopList";
import ListDC from "./MenuListDC";
import ListSites from "./MenuSites";

//creo la funzione per il menu del footer
function MenuFooter() {

    const list = [
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
            link: 'TV',
            url: '/'
        },
        {
            id: '5',
            link: 'Games',
            url: '/'
        },
        {
            id: '6',
            link: 'Videos',
            url: '/'
        },
        {
            id: '7',
            link: 'News',
            url: '/'
        }

    ];

    const list2 = [{
        id: '1',
        link: 'Shop DC',
        url: '/'
    },
    {
        id: '2',
        link: 'Shop DC Collectibles',
        url: '/'

    }]

    const list3 = [{
        id: '1',
        link: 'Term Of Use',
        url: '/'
    },
    {
        id: '2',
        link: 'Privacy Policy(New)',
        url: '/'
    },
    {
        id: '3',
        link: 'AD Choices',
        url: '/'
    },
    {
        id: '4',
        link: 'Advertising',
        url: '/'
    },
    {
        id: '5',
        link: 'Jobs',
        url: '/'
    },
    {
        id: '6',
        link: 'Subscriptions',
        url: '/'
    },
    {
        id: '7',
        link: 'Talent Workshops',
        url: '/'
    },
    {
        id: '8',
        link: 'CPSC Certificates',
        url: '/'
    },
    {
        id: '9',
        link: 'Rating',
        url: '/'
    },
    {
        id: '10',
        link: 'Shop Help',
        url: '/'
    },
    {
        id: '11',
        link: 'Contact Us',
        url: '/'
    }
    ]

    const list4 = [
        {
            id: '1',
            link: 'DC',
            url: '/'
        },
        {
            id: '2',
            link: 'MAD Magazine',
            url: '/'
        },
        {
            id: '3',
            link: 'DC Kids',
            url: '/'
        },
        {
            id: '4',
            link: 'DC Universe',
            url: '/'
        },
        {
            id: '5',
            link: 'DC Power Visa',
            url: '/'
        }
    ]

    return (<div className="container-box-list">
        <div className="menu-footer container">
            <div className="d-flex">
                <div>
                    <h2>Dc Comics</h2>
                    <ListDCComics list={list} />
                    <h2>Shop</h2>
                    <ListShop list={list2} />
                </div>
                <div>
                    <h2>DC</h2>
                    <ListDC list={list3} />
                </div>
                <div>
                    <h2>Site</h2>
                    <ListSites list={list4} />
                </div>

            </div>

            <LogoBG />

        </div>
    </div>
    )
}

//esporto
export default MenuFooter;

