import React from "react";
import Toppost from "./cardscomonent/top-post";
import data from './../data.json'

import Sidecardblog from "./cardscomonent/side-card-blog-2";
class Sidecomponent extends React.Component{
  state  ={
      infodata : data
      
  }
      render(){
          return(
              <>
               <div className="sidepost-head">
              <Toppost maindata={this.state.infodata} />
              <div style={{marginTop:"-150px"}}>
              <Sidecardblog />
              <Sidecardblog />
              <Sidecardblog />
              <Sidecardblog />
              </div>
              </div>
              </>
          );
      }

}
export default Sidecomponent