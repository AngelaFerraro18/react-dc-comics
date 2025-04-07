function ListShop({ list }) {
    return (<ul className="mb-24">
        {list.map(element => <li key={element.id}><a href={element.url}></a>{element.link}</li>)}
    </ul>)
}

export default ListShop;