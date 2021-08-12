import React, { Fragment } from "react";
import Body from "./body";
import Header from "./header";

class  Page1 extends React.Component{
    render(){
        return(
            <Fragment>
            <Header/>
            <Body />
            </Fragment>
        )
    }
}
export default Page1;