
function MenuHeader({ linkList }) {
    return (<ul>
        {linkList.map(element => <li key={element.id}><a href={element.url}></a>{element.link}</li>)}
    </ul>

    )
}
export default MenuHeader;