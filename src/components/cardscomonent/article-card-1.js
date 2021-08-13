import React from 'react';
import Latestarticleimg from './latest-article-img';
function LatestarticleCard  (props){
        
   
        return(
            <>
             <div className="latest-article-card">
                <div className="latest-article-card-image">
                    <Latestarticleimg />
                </div>
                <div className="latest-article-card-heading"  >
                   <h1>{props.maindata[0].heading}</h1>
                   <p className="latest-article-card-para ">{props.maindata[0].para}</p>
                   <p className="card-footer ">
              <strong>Travel</strong> /August 21 2017
          </p>
                </div>
            </div>
            </>
        );
    }

export default LatestarticleCard;