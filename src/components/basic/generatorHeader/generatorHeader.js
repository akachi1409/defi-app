import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import "./generatorHeader.css";

class GeneratorHeader extends Component {
    render() {
        return (
            <div className="generatorHeader-contanier">
                <div className="generatorHeader-overlay"></div>
                <div className="generatorHeader-layout">
                    <Container  style={{justifyContent: 'center', alignItems: 'center', margin:'auto', textAlign: 'center'}}>
                        <Row>
                            <h2 className="generatorHeader-title">CREATE ITEM</h2>
                        </Row>
                        <Row>
                            <p className="generatorHeader-text">Create a beautiful NFT product. explore the best collection from popular digital artists.</p>
                        </Row>
                        <Row>
                            <div>
                                <a href="https://dmc2.tempurl.host/" className="generatorHeader-href">
                                    <span>Back To Home</span>
                                </a>
                            </div>
                            
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default GeneratorHeader;