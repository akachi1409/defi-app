import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Bid from "./bid"
import "./item.css" ;

import img1 from "../../assets/img/item/img1.png"
import img2 from "../../assets/img/item/img2.png"
import img3 from "../../assets/img/item/img3.png"
import img4 from "../../assets/img/item/img4.png"
import img5 from "../../assets/img/item/img5.png"
class Item extends Component {
    render() {
        return(
            <>
                <section className="item-container">
                    <div className="item-layout element-row">
                            <div className="item-left-container">
                                <div className="item-left-layout">
                                    <Fade top>
                                        <div className="item-left">
                                            <div className="item-left-title-layout">
                                                <h2 className="item-left-title">Textures & Patterns, Wallpapers</h2>
                                            </div>
                                            <div className="item-left-title-layout">
                                                <h2 className="item-left-subtitle">current price 0.34 ETH</h2>
                                            </div>
                                            <div className="item-left-title-layout">
                                                <div className="item-left-title-text">
                                                    <h2 className="sub-title">
                                                        <span className="solid-color-text">Artist:</span>
                                                        <span> Christer Gundersen</span>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="item-left-title-layout">
                                                <div className="item-left-title-text">
                                                    <h2 className="sub-title">
                                                        <span className="solid-color-text">size:</span>
                                                        <span> 1440 x 1080</span>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="item-left-title-layout">
                                                <div className="item-left-title-text">
                                                    <h2 className="sub-title">
                                                        <span className="solid-color-text">Created:</span>
                                                        <span> 10 July, 2021</span>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="item-left-title-layout">
                                                <div className="item-left-title-text">
                                                    <h2 className="sub-title">
                                                        <span className="solid-color-text">Collection:</span>
                                                        <span> Art</span>
                                                    </h2>
                                                </div>
                                            </div>
                                            {/* <div className="item-left-photo-layout">
                                                <div className="item-left-photo-wrap">
                                                    <figure className="item-left-image-box">
                                                        <img src={img1}/>
                                                    </figure>
                                                    <div style={{marginTop:'auto', marginBottom:'auto'}}>
                                                        <h3 className="img-box-title">Jade Scarlato</h3>
                                                        <p className="img-box-description">650.30 ETC</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <Bid img = {img1} title="Jade Scarlato" description="650.30 ETC" type={true}/>
                                        </div>
                                    </Fade>
                                    <Fade right>
                                        <div className="item-left-high">
                                            <div className="item-high-layout">
                                                <div className="element-row">
                                                    <div className="item-high-container">
                                                        <div className="item-high-box">
                                                            <div className="item-high-text-box">
                                                                <h2 className="high-bid-title">highest bid</h2>
                                                            </div>
                                                            <div className="item-high-text-box">
                                                                <div className="item-high-div">
                                                                </div>
                                                            </div>
                                                            <Bid img = {img2} title="Leon Rohrwild" description="650.30 ETC" type={false}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <div className="item-right-container">
                                <Fade right>
                                    <div className="item-right-high">
                                        <div className="item-high-layout">
                                            <div className="element-row">
                                                <div className="item-high-container">
                                                    <div className="item-high-box">
                                                        <div className="item-high-text-box">
                                                            <h2 className="high-bid-title">Latest bid</h2>
                                                        </div>
                                                        <div className="item-high-text-box">
                                                            <div className="item-high-div">
                                                            </div>
                                                        </div>
                                                        <Bid img = {img3} title="Paolo Bendandi" description="650.30 ETC" type={true}/>
                                                        <Bid img = {img4} title="Filipp Romanovski" description="650.30 ETC" type={true}/>
                                                        <Bid img = {img2} title="Leon Rohrwild" description="650.30 ETC" type={true}/>
                                                        <Bid img = {img1} title="Jade Scarlato" description="650.30 ETC" type={true}/>
                                                        <Bid img = {img5} title="Pascal Meier" description="650.30 ETC" type={true}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Item