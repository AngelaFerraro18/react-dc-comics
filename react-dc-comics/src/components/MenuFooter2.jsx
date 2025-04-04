function List2(props) {
    return (
        <ul>
            <h2>Shop</h2>
            <li><a href={props.list[0].url}></a>{props.list[0].link}</li>
            <li><a href={props.list[1].url}></a>{props.list[1].link}</li>
        </ul>
    )
}

export default List2;