import React, { Component }from 'react'
import "./bid.css";

class Bid extends Component {
    render() {
        return (
            <>
                <div className="item-left-photo-layout">
                    <div className="item-left-photo-wrap">
                        <figure className="item-left-image-box">
                            <img src={this.props.img}/>
                        </figure>
                        <div style={{marginTop:'auto', marginBottom:'auto'}}>
                            <h3 className="img-box-title">{this.props.title}</h3>
                            {
                                this.props.type === true ?
                                <p className="img-box-description">{this.props.description}</p>
                                :<p className="img-box-description1">{this.props.description}</p>
                            }
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Bid;