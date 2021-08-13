import React from 'react';
import './../styles/body.css'
import LatestarticleCard from './cardscomonent/article-card-1';
import data from './../data.json'
class Latestarticle extends React.Component{
   
    state={
        innerdata : data
    }
    
     
    render(){
       
        return(
        <>
        <div className="latestarticlecontainer">
          <div className="latest-article-header">
             <h1 className="latest-article-heading">Latest Article</h1>
             <hr></hr>
          </div>
          <div className="latest-article-body">
              <hr></hr>
           <LatestarticleCard maindata={this.state.innerdata} />
           <hr></hr>
           <LatestarticleCard maindata={this.state.innerdata} />
           <hr></hr>
           <LatestarticleCard maindata={this.state.innerdata} />
           <hr></hr>
           <LatestarticleCard maindata={this.state.innerdata} />
          
          
          </div>
        </div>
        </>
        );
    }
}
export default Latestarticle;