import Crousal from "./crousal";
import './../styles/body.css'
import ArtileSection from "./articlesection";
import Latestarticle from "./latestarticle";
import Advertisement from "./advertisement";
import BlogArticleCard3 from "./cardscomonent/blogarticle3";

import Sidecomponent from "./side-card-2";
import Footercomponent from "./footer-component";
let Body =()=>{
    return(
        <>
        <div  className="body-continer">
        <Crousal/>
        <ArtileSection />
        <Latestarticle />
        <div className="advt1">
        <Advertisement />
        </div>
        <div className="blog-article-3">
          <BlogArticleCard3/>
        </div>
        <div >
            <Sidecomponent/>
        </div>
        <div className="view-more-footer">
            <Footercomponent />
        </div>
        </div>
        </>
    );
}
export default Body