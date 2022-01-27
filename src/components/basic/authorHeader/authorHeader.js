import React , { Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import './authorHeader.css';

class AuthorHeader extends Component {
    render() {
        return(
            <div className="authorHeader-contanier">
                <div className="authorHeader-overlay"></div>
                <div className="authorHeader-layout">
                    <Container  style={{justifyContent: 'center', alignItems: 'center', margin:'auto', textAlign: 'center'}}>
                        <Row>
                            <h2 className="authorHeader-title">Author</h2>
                        </Row>
                        <Row>
                            <p className="authorHeader-text">Create a beautiful NFT product. explore the best collection from popular digital artists.</p>
                        </Row>
                        <Row>
                            <div>
                                <a href="https://dmc2.tempurl.host/" className="authorHeader-href">
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
export default AuthorHeader;