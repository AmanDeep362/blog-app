
import cardimage from './../../images/sideimage2.jpg'
function Toppost(props){
    console.log(props)
    return(
        <>
        
       
            <h2 className="toppostheding">Top post</h2>
            <hr></hr>
            <div className="top-post-card">
            <img src={cardimage} alt=""></img>
            <h1>{props.maindata[0].heading}</h1>
            <p className="sideblogfooter">Travel/August 21 2017</p>
            <p className="counter-list">1</p>
           
            </div>
      
        </>
    );
}
export default Toppost;