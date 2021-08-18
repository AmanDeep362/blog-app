import React from "react";
import blogdata from '../data.json'
import userimage from '../images/userimage.png'
class Userinfo extends React.Component{
   
    render(){

        this.state ={
            username : blogdata
        }
      
        return(
            <>
            <div className="user-info">
              <img className="userimg" src={userimage} alt="user"></img>
              <p className="username">{this.state.username[0].userinfo.username}</p>
              <p className="blog-time">Jan 28 2019 10 min ago</p>
            </div>
            
            </>
        );
    }
}
export default Userinfo ;