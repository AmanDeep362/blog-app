import React from "react";
import blogdata from '../data.json'
import blogimg1 from '../images/blog-image.png'
import shareimg from "../images/share.png"
import Userinfo from "../styles/userinfo";
import Clapbtn from "./clapbtn";
import codeimg from '../images/react-code-img.png'
class Page3blog extends React.Component {
    state = {
        blogcontent: blogdata
    }
    render() {

        return (
            <>
                <div className="page3-blog-heading">
                    <h1>{this.state.blogcontent[0].blogheading}</h1>
                </div>
                <div className="user-info-container">
                    <Userinfo />
                </div>
                <div className="social-media">

                </div>
                <div className="clap-container">
                    <Clapbtn />
                    <div className="share">
                        <img src={shareimg} alt="shareimg"></img>
                        <p className="noofclaps">share the article</p>
                    </div>
                </div>
                <div className="blog-img-1">
                    <img src={blogimg1} alt="blog1img"></img>
                </div>
                <div className="page3-blog-para">
                    <p>{this.state.blogcontent[0].blogpara}</p>
                </div>
                <div>
                    <img className="react-code-img" src={codeimg} alt="react-img"></img>
                </div>
                <div className="blog-tags-container">
                    <span  className="blog-tags">React</span>
                    <span  className="blog-tags">Javascript</span>
                    <span  className="blog-tags">Animation</span>
                </div>
                <div className="clap-btn-2">
                    <Clapbtn /> 
                </div>
                <div className="writer-information">
                    <p className="writer-information-head">written by</p>
                    <Userinfo />
                </div>
            </>
        );
    }
}
export default Page3blog;