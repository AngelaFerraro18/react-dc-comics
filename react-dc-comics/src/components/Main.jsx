import BlueStrip from "./BlueStrip";
import CardList from "./cardList";
import comics from "./comics";

//creo la funzione che mi identificherà il main del documento
function Main() {
    return (<main >
        <div className="black-div">
            <div className="comics-label">Current Series</div>
        </div>
        <div className="list-container">
            <CardList comicCards={comics} />
            <button className="btn-load-more">Load more</button>
        </div>
        <BlueStrip />
    </main>);
};

//esporto la funzione Main
export default Main;