import BlueStrip from "./BlueStrip";
import CardList from "./cardList";
import comics from "./comics";

//creo la funzione che mi identificherà il main del documento
function Main() {
    return (<main >
        <div className="black-div">
            <div className="comics-label">Current Series</div>
        </div>
        <CardList comicCards={comics} />
        <BlueStrip />
    </main>);
};

//esporto la funzione Main
export default Main;