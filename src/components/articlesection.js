import ArticleCard1 from "./cardscomonent/Articlecard1"

let ArtileSection = ()=>{
    return(
   <>
   <div className="articlesection">
       <div className="articleheader">
           <h1 className="articleheading">The Latest</h1>
           <hr></hr>
       </div>
       <div className="Articlebody">
        <ArticleCard1 />
        <ArticleCard1 />
        <ArticleCard1 />
       </div>
   </div>
   </>
    );
}

export default ArtileSection ;