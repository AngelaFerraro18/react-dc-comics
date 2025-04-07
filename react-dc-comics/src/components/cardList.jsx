import ComicCard from "./comicCard";

function CardList({ comicCards }) {

    return (<div className="container comics-list">
        {comicCards.map(comic => <ComicCard key={comic.id} comic={comic} />)}

    </div>)
}

export default CardList;