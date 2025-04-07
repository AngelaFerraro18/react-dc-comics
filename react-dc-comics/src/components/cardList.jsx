import ComicCard from "./comicCard";
import comics from "./comics";

function CardList() {

    return (<div>
        <ComicCard key={comics.id} />
    </div>)
}

export default CardList;