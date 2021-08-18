import './../styles/header.css'
import React from 'react'
import sidebar from '../images/sidebar.png'
  class NavBar extends React.Component{
    toggle() {
      
    }
    render(){
      return(
  <>
  <div className="nav">
  <div onClick={this.toggle} className="side-bar">
  <img src={sidebar} alt="sidebar"></img>
      </div>
      <ul className="navlist">
         <li>Home</li>
         <li>Bollywood</li>
         <li>Technology</li>
         <li>Hollywood</li>
         <li>Fitness</li>
         <li>Food</li>
      </ul>
      
        
  </div>
  </>
    );
}
  }

export default NavBar