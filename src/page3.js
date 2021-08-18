import React from "react";
import './styles/header.css'
import HeaderPage3 from "./components/page3header";
import './styles/blog.css'
import Page3blog from "./components/page-3-blog";
import Page3Footer from "./components/page3footer";
class Page3 extends React.Component{
render(){
    return(
        <>
       <div className="page3-navbar">
           <HeaderPage3 />
       </div>
       <div className="blog-content-container">
        <Page3blog />
       </div>
       <div>
           <Page3Footer />
       </div>
        </>
    );
}
}
export default Page3;