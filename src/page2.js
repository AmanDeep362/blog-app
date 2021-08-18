import React, { Fragment } from "react";
import '././styles/body2.css'
import LatestarticleCard from "./components/cardscomonent/article-card-1";
import data from './data.json'
import Header from "./components/header";
import  './styles/body.css'
import Sidecomponent from "./components/side-card-2";
import Advertisement from "./components/advertisement";


class Page2 extends React.Component {
    state={
        innerdata : data
    }
    render() {
        return (
            <Fragment>
                <Header />
                <div className="page2-body">
                    <div className="body-container-1">
                      <h1 className="bollywood-heading">
                        Bollywood
                      </h1>
                      <hr className="line-break"></hr>
                      <div className="bollyword-article-card">
                      <LatestarticleCard maindata={this.state.innerdata} />
                      <LatestarticleCard maindata={this.state.innerdata} />
                      <LatestarticleCard maindata={this.state.innerdata} />
                      <LatestarticleCard maindata={this.state.innerdata} />
                      <LatestarticleCard maindata={this.state.innerdata} />
                      <LatestarticleCard maindata={this.state.innerdata} />
                      <LatestarticleCard maindata={this.state.innerdata} />
                      <LatestarticleCard maindata={this.state.innerdata} />
                      <LatestarticleCard maindata={this.state.innerdata} />
                      
                      </div>
                    </div>
                    <div className="body-container-2">
                        <Sidecomponent />
                        <div className="page-2-advt">
                        <Advertisement />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Page2;