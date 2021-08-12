import Sidecard from "./cardscomonent/sidecard1"
import Titlecard from "./cardscomonent/titlecrd"

let Crousal = ()=>{

    return(
        <div className="titleblog">
            <div className="blog1">
                <Titlecard />
            </div>
            <div className="blog2">
                <Sidecard />
            </div>
            <div className="blog3">
            <Sidecard />
            </div>
        </div>
    );
}
export default Crousal;