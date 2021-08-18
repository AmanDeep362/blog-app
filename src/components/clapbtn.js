import React from "react";
import blogdata from '../data.json'
import clapimg from '../images/clap-btn.png'
class Clapbtn extends React.Component{
   
    render(){

        this.state ={
            clapdata : blogdata
        }
      
        return(
            <>
            <div className="clap-icon">
                <img src={clapimg}  alt="clap-icon"></img>
                <p className="noofclaps">{this.state.clapdata[0].NoOfClaps}</p>
            </div>
            
            </>
        );
    }
}
export default Clapbtn ;