import sideimg from './../../images/sideblogimg.jpg'
let Sidecard = ()=>{
    return(
        <div className="sidecard">
            <img src={sideimg} alt="title-card"></img>
           <div className="innertext-blog2">
               <p className="blog2para">The Sound Cloud You Loved this Doomed</p>
               <p className="blog2para2">Travel/August 21 2017</p>
           </div>
            
        </div>
    );
}
export default Sidecard;