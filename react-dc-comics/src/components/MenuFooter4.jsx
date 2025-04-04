function List4(props) {
    return (
        <ul>
            <h2>Sites</h2>
            <li><a href={props.list[0].url}></a>{props.list[0].link}</li>
            <li><a href={props.list[1].url}></a>{props.list[1].link}</li>
            <li><a href={props.list[2].url}></a>{props.list[2].link}</li>
            <li><a href={props.list[3].url}></a>{props.list[3].link}</li>
            <li><a href={props.list[4].url}></a>{props.list[4].link}</li>
        </ul>
    )
}

export default List4;