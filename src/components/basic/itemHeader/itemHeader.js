import React, {Component} from "react"
import {Container, Row} from 'react-bootstrap';
import "./itemHeader.css";

class ItemHeader extends Component {
    render() {
        return (
            <>
            <div className="itemHeader-contanier">
                <div className="itemHeader-overlay"></div>
                <div className="itemHeader-layout">
                    <Container  style={{justifyContent: 'center', alignItems: 'center', margin:'auto', textAlign: 'center'}}>
                        <Row>
                            <h2 className="itemHeader-title">ITEM DETAILS</h2>
                        </Row>
                        <Row>
                            <p className="itemHeader-text">Create a beautiful NFT product. explore the best collection from popular digital artists.</p>
                        </Row>
                        <Row>
                            <div>
                                <a href="https://dmc2.tempurl.host/" className="itemHeader-href">
                                    <span>Back To Home</span>
                                </a>
                            </div>
                            
                        </Row>
                    </Container>
                </div>
            </div>
            </>
        )
    }
}
export default ItemHeader;