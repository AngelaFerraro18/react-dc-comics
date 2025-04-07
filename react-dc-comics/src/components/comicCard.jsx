
function ComicCard({ comic }) {

    return (<div className="comic-card">
        <div className="comic-img">
            <img src={comic.thumb} />
        </div>
        <p>{comic.series}</p>
    </div>)

}

export default ComicCard;