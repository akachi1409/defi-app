import React from "react";

import "./nftItem.css";
class NftItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div className="nftItem-container">
                    <div className="nftItem-wrap">
                        <div className="nftItem-image">
                            <figure>
                                <img src={this.props.img}/>
                            </figure>
                        </div>
                        <div className="nftItem-description">
                            <div className="nftItem-title">
                                <h3>{this.props.title}</h3>
                                <h4>{this.props.description}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NftItem;