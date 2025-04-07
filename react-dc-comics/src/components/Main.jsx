import BlueStrip from "./BlueStrip";
import CardList from "./cardList";
import comics from "./comics";

//creo la funzione che mi identificherà il main del documento
function Main() {
    return (<main >
        <div className="black-div">
            <p className="container">{'---> Content Goes Here! <---'}</p>
        </div>
        <CardList comicCards={comics} />
        <BlueStrip />
    </main>);
};

//esporto la funzione Main
export default Main;