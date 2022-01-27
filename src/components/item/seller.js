import React, { Component } from 'react';

import Bid from "./bid"
import "./seller.css";
import img1 from "../../assets/img/item/img1.png"
import img2 from "../../assets/img/item/img2.png"
import img3 from "../../assets/img/item/img3.png"
import img4 from "../../assets/img/item/img4.png"
import img5 from "../../assets/img/item/img5.png"
class Seller extends Component {
    render() {
        return (
            <>
                <section className="seller-container">
                    <div className="seller-layout element-row">
                        <section className="seller-title-layout">
                            <h2 className="seller-title">top sellers this month</h2>
                            <h2 className="seller-title-text">a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a
                                blockchain, that certifies a digital asset to be unique</h2>
                        </section>
                        <section className="seller-box-layout">
                            <div className="element-row">
                                <div className="seller-box">
                                    <div className="seller-box-container">
                                        <div className="seller-box-wrap">
                                            <Bid img = {img3} title="Paolo Bendandi" description="650.30 ETC" type={true}/>
                                            <Bid img = {img4} title="Filipp Romanovski" description="650.30 ETC" type={true}/>
                                            <Bid img = {img2} title="Leon Rohrwild" description="650.30 ETC" type={true}/>
                                            <Bid img = {img1} title="Jade Scarlato" description="650.30 ETC" type={true}/>
                                            <Bid img = {img5} title="Pascal Meier" description="650.30 ETC" type={true}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="seller-box">
                                    <div className="seller-box-container">
                                        <div className="seller-box-wrap">
                                            <Bid img = {img3} title="Paolo Bendandi" description="650.30 ETC" type={true}/>
                                            <Bid img = {img1} title="Jade Scarlato" description="650.30 ETC" type={true}/>
                                            <Bid img = {img4} title="Filipp Romanovski" description="650.30 ETC" type={true}/>
                                            <Bid img = {img2} title="Leon Rohrwild" description="650.30 ETC" type={true}/>
                                            <Bid img = {img5} title="Pascal Meier" description="650.30 ETC" type={true}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="seller-box">
                                    <div className="seller-box-container">
                                        <div className="seller-box-wrap">
                                            <Bid img = {img2} title="Leon Rohrwild" description="650.30 ETC" type={true}/>
                                            <Bid img = {img3} title="Paolo Bendandi" description="650.30 ETC" type={true}/>
                                            <Bid img = {img4} title="Filipp Romanovski" description="650.30 ETC" type={true}/>
                                            <Bid img = {img1} title="Jade Scarlato" description="650.30 ETC" type={true}/>
                                            <Bid img = {img5} title="Pascal Meier" description="650.30 ETC" type={true}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </>
        )
    }
}
export default Seller;