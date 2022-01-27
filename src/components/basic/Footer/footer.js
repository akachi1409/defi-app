import React, {Component} from "react";

import "./footer.css";
import {Container, Row, Col} from "react-bootstrap";
import Mono_Logo from "../../../assets/img/basic/footer/mogl-logo.png";
import FollowBtn from "../button/followBtn.js"
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[
                {
                    title:"MARKETPLACE",
                    text:[
                        "Art","Music","Games","Photography"
                    ]
                },
                {
                    title:"COMPANY",
                    text:[
                        "Our Team","Partener With Us","Privacy & Policy", "Help"
                    ]
                },
                {
                    title:"FOLLOW WITH",
                    text:[
                        "Facebook","Twitter","LinkedIn", "Discord"
                    ]
                },
                {
                    title:"GET IN TOUCH",
                    text:[
                        
                    ]
                },
            ],
            isMobile:false
        };
    }
    render() {
        return(
            <div className="footer-container">
                <Container>
                    <section className="footer-section" >
                        <div className="footer-bar-layout">
                            <Row style={{width:"100%"}}>
                                <Col sm="12" md="12" lg="3"className="footer-bar-link">
                                    <a href="https://dmc2.tempurl.host/">
                                        <img src={Mono_Logo}/>
                                    </a>
                                </Col>
                                <Col sm="0" md="0" lg="6"></Col>
                                <Col sm="12" md="12" lg="3">
                                    <div className="footer-followBtn-layout">
                                        <div className="footer-followBtn">
                                            <FollowBtn/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                    <section className="footer-section1">
                        <div className="footer-section1-layout">
                            <Row style={{width: '100%'}}>
                            {
                                this.state.data.map((item, index)=>
                                    <Col lg="3" md="12" sm="12" className="footer-section1-col" key={index}>
                                        <div className="footer-section1-col-wrap">
                                            <h4 className="footer-section1-col-title">
                                                {item.title}
                                            </h4>
                                            <div className="footer-section1-col-list">
                                                <ul className="foot-section1-col-ul">
                                                    {
                                                        item.text.map((t, indexT)=>
                                                        <li className="footer-section1-col-li" key={indexT}>
                                                            <a href="#">
                                                                <span className="footer-section1-col-text">{t}</span>
                                                            </a>
                                                        </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            }
                            </Row>  
                        </div>
                    </section>
                    <section className="footer-copyright">
                        <Row>
                            <p className="footer-copyright-text">Copyright © 2021 MOGL. All rights reserved.</p>
                        </Row>
                    </section>
                </Container>
            </div>
        )
    }
}

export default Footer;