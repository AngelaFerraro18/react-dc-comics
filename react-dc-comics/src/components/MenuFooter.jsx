import LogoBG from "./LogoBG";
import List1 from "./MenuFooter1";
import List2 from "./MenuFooter2";
import List3 from "./MenuFooter3";
import List4 from "./MenuFooter4";

//creo la funzione per il menu del footer
function MenuFooter() {
    return (<div className="container-box-list">
        <div className="menu-footer container">
            <div className="d-flex">
                <List1 />
                <List2 />
                <List3 />
                <List4 />
            </div>
            <LogoBG />

        </div>
    </div>
    )
}

//esporto
export default MenuFooter;