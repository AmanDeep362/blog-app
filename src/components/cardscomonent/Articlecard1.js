import articleimg1 from './../../images/articleimage1.jpg'
let ArticleCard1 = ()=>{
    return(
      <>
      <div className="article-card">
          <img src={articleimg1} alt="article"></img>
          <h3 className="card-heading">Joshua Tree Overnight Adventure</h3>
          <p className="card-para">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
          <p className="card-footer">
              <strong>Travel</strong> /August 21 2017
          </p>
      </div>
      </>
    );
}
export default ArticleCard1;