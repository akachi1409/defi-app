import React , { Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import './nftHeader.css';

class NftHeader extends Component {
    render() {
        return(
            <div className="nftHeader-contanier">
                <div className="nftHeader-overlay"></div>
                <div className="nftHeader-layout">
                    <Container  style={{justifyContent: 'center', alignItems: 'center', margin:'auto', textAlign: 'center'}}>
                        <Row>
                            <h2 className="nftHeader-title">My NFT</h2>
                        </Row>
                        <Row>
                            <p className="nftHeader-text">My NFT List here.</p>
                        </Row>
                        <Row>
                            <div>
                                <a href="https://dmc2.tempurl.host/" className="nftHeader-href">
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
export default NftHeader;