import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import "./header.css" ;

import Mono_Logo from "../../assets/img/basic/header/mogl-logo.png"
class Header extends Component {
    render() {
        return(
            <div>
                <section className="header-container">
                    <Container>
                        <Row>
                            <Col lg="2">
                                <div className="header-logo">
                                    <img width="186" height="59" src={Mono_Logo}/>
                                </div>
                            </Col>
                            <Col lg="7">
                                <div className="header-menu">
                                    <nav>
                                        <ul style={{display: 'inline-flex'}}>
                                            <li className="header-menu-item">
                                                <a href="https://dmc2.tempurl.host/mogl-about/" className="header-menu-link">MOGL – About</a>
                                            </li>
                                            <li className="header-menu-item">
                                            <a href="https://dmc2.tempurl.host/mogl-explore/" className="header-menu-link">MOGL – Explore<span class="fas fa-angle-down"></span></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
        
    }
}
export default Header;