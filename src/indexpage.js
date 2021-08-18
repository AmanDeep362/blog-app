import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import   { Link } from 'react-router-dom'

class Main extends React.Component{
    render(){
        return(
            <>
           
            
             <ul>
                 <li>
                 <Link to="/page1">Page1</Link>

                 </li>
                 <li>
                     <Link to='/page2'>Page2</Link>
                 </li>
                 <li>
                     <Link to='/page3'>Page3</Link>
                 </li>
                 
             </ul>
        
            
            </>
        );
    }
}
export default Main