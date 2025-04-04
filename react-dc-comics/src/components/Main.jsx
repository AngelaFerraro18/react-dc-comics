import BlueStrip from "./BlueStrip";

//creo la funzione che mi identificherà il main del documento
function Main() {
    return (<main >
        <div className="black-div">
            <p className="container">{'---> Content Goes Here! <---'}</p>
        </div>
        <BlueStrip />
    </main>);
};

//esporto la funzione Main
export default Main;