import LogoBG from "./LogoBG";
import List1 from "./MenuFooter1";
import List2 from "./MenuFooter2";
import List3 from "./MenuFooter3";
import List4 from "./MenuFooter4";

//creo la funzione per il menu del footer
function MenuFooter() {

    const list = [
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
            link: 'TV',
            url: '/'
        },
        {
            link: 'Games',
            url: '/'
        },
        {
            link: 'Videos',
            url: '/'
        },
        {
            link: 'News',
            url: '/'
        }

    ];

    const list2 = [{

        link: 'Shop DC',
        url: '/'
    },
    {
        link: 'Shop DC Collectibles',
        url: '/'

    }]

    const list3 = [{
        link: 'Term Of Use',
        url: '/'
    },
    {
        link: 'Privacy Policy(New)',
        url: '/'
    },
    {
        link: 'AD Choices',
        url: '/'
    },
    {
        link: 'Advertising',
        url: '/'
    },
    {
        link: 'Jobs',
        url: '/'
    },
    {
        link: 'Subscriptions',
        url: '/'
    },
    {
        link: 'Talent Workshops',
        url: '/'
    },
    {
        link: 'CPSC Certificates',
        url: '/'
    },
    {
        link: 'Rating',
        url: '/'
    },
    {
        link: 'Shop Help',
        url: '/'
    },
    {
        link: 'Contact Us',
        url: '/'
    }
    ]

    const list4 = [
        {
            link: 'DC',
            url: '/'
        },
        {
            link: 'MAD Magazine',
            url: '/'
        },
        {
            link: 'DC Kids',
            url: '/'
        },
        {
            link: 'DC Universe',
            url: '/'
        },
        {
            link: 'DC Power Visa',
            url: '/'
        }
    ]

    return (<div className="container-box-list">
        <div className="menu-footer container">
            <div className="d-flex">
                <List1 title={"DC Comics"} list={list} />
                <List2 title={"Shop"} list={list2} />
                <List3 title={"DC"} list={list3} />
                <List4 title={"Site"} list={list4} />
            </div>
            <LogoBG />

        </div>
    </div>
    )
}

//esporto
export default MenuFooter;