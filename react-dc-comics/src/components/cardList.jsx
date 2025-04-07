import ComicCard from "./comicCard";
// import comics from "./comics";

function CardList({ comicCards }) {

    return (<div>
        {comicCards.map(comic => <ComicCard key={comic.id} comic={comic} />)}

    </div>)
}

export default CardList;