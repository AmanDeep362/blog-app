import robotimg from '../images/pagenotfound.jpg'
const Pagenotfound = ()=>{
    return(
        <>
        <h1 style={{fontSize:"60px",textAlign:"center",marginTop:"150px",color:"red"}}>Error 404</h1>
        <img style={{width:"200px",marginLeft:"550px"}} src={robotimg}></img>
        <h2 style={{fontSize:"32x",textAlign:"center",color:"blue"}}>Sorry! Page Not Found , Something Went Wrong</h2>
        </>
    )
}
export default Pagenotfound;