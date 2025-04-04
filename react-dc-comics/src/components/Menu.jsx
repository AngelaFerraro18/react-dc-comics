//assegno il parametro props alla mia funzione
function Menu(props) {

    //aggiorno la mia lista ul utilizzando props e creato l'array di oggetti con chiave "link" e "url" (spostato in App()), vado ad inserire il tag <a> con href su .url dell'elemento in posizione [0 ---> length - 1]
    return (<ul>
        <li><a href={props.linkList[0].url}></a>{props.linkList[0].link}</li>
        <li><a href={props.linkList[1].url}></a>{props.linkList[1].link}</li>
        <li><a href={props.linkList[2].url}></a>{props.linkList[2].link}</li>
        <li><a href={props.linkList[3].url}></a>{props.linkList[3].link}</li>
        <li><a href={props.linkList[4].url}></a>{props.linkList[4].link}</li>
        <li><a href={props.linkList[5].url}></a>{props.linkList[5].link}</li>
        <li><a href={props.linkList[6].url}></a>{props.linkList[6].link}</li>
        <li><a href={props.linkList[7].url}></a>{props.linkList[7].link}</li>
        <li><a href={props.linkList[8].url}></a>{props.linkList[8].link}</li>
        <li><a href={props.linkList[9].url}></a>{props.linkList[9].link}</li>
    </ul>

    )
}

export default Menu;

/*<ul>
        <li>Characters</li>
        <li>Comics</li>
        <li>Movies</li>
        <li>TV</li>
        <li>Games</li>
        <li>Collectibles</li>
        <li>Videos</li>
        <li>Fans</li>
        <li>News</li>
        <li>Shop</li>
    </ul> */