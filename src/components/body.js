import Crousal from "./crousal";
import './../styles/body.css'
import ArtileSection from "./articlesection";
let Body =()=>{
    return(
        <>
        <div  className="body-continer">
        <Crousal/>
        <ArtileSection />
        </div>
        </>
    );
}
export default Body