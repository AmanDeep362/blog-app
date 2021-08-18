import  React from 'react'
import ArtileSection from './articlesection'
import ArticleCard1 from './cardscomonent/Articlecard1'
class Page3Footer extends React.Component{
    render(){
        return(
            <>
            <div className= "page-3-footer-container">
               <h3  className= "page-3-footer-heading"> More from the siren</h3>
               <div className="page-3-footer-article">
                   <ArticleCard1 />
                   <ArticleCard1 />
                   <ArticleCard1 />
               </div>
            </div>
            </>
        );
    }
}
export default Page3Footer;
