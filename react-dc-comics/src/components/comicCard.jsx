import comics from "./comics";

function ComicCard() {

    return (
        comics.map(comic => {
            return (
                <div>
                    <img src={comic.thumb} />
                    <p>{comic.series}</p>
                </div>)
        })
    )
}

export default ComicCard;