import blog1img from './../../images/blog1img.jpg'
let Titlecard = ()=>{
    return(
        <div className="titlecard">
            <img src={blog1img} alt="title-card"></img>
            <p className="blog1title">Title of view gallery</p>
        </div>
    );
}
export default Titlecard;