import React from "react";
import './../styles/header.css'
import NavBar from "./navar";
class Header extends React.Component {
    render() {
        return (
            <>
                <div className="header-container">
                    <div className="heading">
                        <h1 className="main-heading-1">The</h1>
                        <h1 className="main-heading-2">Siren</h1>
                    </div>
                    <NavBar />
                <hr style={{opacity:"0.3" ,marginRight:"30px"}}></hr>
                </div>
                
            </>

        );
    }
}
export default Header;