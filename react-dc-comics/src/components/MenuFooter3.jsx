function List3(props) {
    return (

        <ul>
            <h2>{props.title}</h2>
            <li><a href={props.list[0].url}></a>{props.list[0].link}</li>
            <li><a href={props.list[1].url}></a>{props.list[1].link}</li>
            <li><a href={props.list[2].url}></a>{props.list[2].link}</li>
            <li><a href={props.list[3].url}></a>{props.list[3].link}</li>
            <li><a href={props.list[4].url}></a>{props.list[4].link}</li>
            <li><a href={props.list[5].url}></a>{props.list[5].link}</li>
            <li><a href={props.list[6].url}></a>{props.list[6].link}</li>
            <li><a href={props.list[7].url}></a>{props.list[7].link}</li>
            <li><a href={props.list[8].url}></a>{props.list[8].link}</li>
            <li><a href={props.list[9].url}></a>{props.list[9].link}</li>
            <li><a href={props.list[10].url}></a>{props.list[10].link}</li>
        </ul>
    )
}

export default List3;