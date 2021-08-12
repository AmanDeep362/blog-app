import './../styles/header.css'

let NavBar = ()=>{
    return(
  <>
  <div className="nav">
      <ul className="navlist">
         <li>Home</li>
         <li>Bollywood</li>
         <li>Technology</li>
         <li>Hollywood</li>
         <li>Fitness</li>
         <li>Food</li>
      </ul>
      <hr style={{opacity:"0.3" ,marginRight:"30px"}}></hr>
  </div>
  </>
    );
}
export default NavBar