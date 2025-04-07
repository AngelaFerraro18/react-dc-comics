
function ComicCard({ comic }) {

    return (<div>
        <img src={comic.thumb} />
        <p>{comic.series}</p>
    </div>)

}

export default ComicCard;