import React, {Component} from 'react';
import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import './nft.css';

class NFT extends Component {
    render() {
        return (
            <>
                <div className="nft-layout">
                    <div className="nft-layout-overlay"></div>
                    <div className="nft-layout-container">
                        <Container className="nft-layout-form">
                            <Form>
                                <Form.Group className="form-group">
                                    <Form.Label className="nft-label">Upload file</Form.Label>
                                    <Form.Control type="file"/>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label className="nft-label">Item category</Form.Label>
                                    <br/>
                                    <Form.Check inline label="1" name="group1" type="radio" label="Art"/>
                                    <Form.Check inline label="1" name="group1" type="radio" label="Music"/>
                                    <Form.Check inline label="1" name="group1" type="radio" label="Games"/>
                                    <Form.Check inline label="1" name="group1" type="radio" label="Photography"/>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label className="nft-label">Item title</Form.Label>
                                    <br/>
                                    <Form.Control type="text" placeholder="Eaxmple- art gallery"/>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label className="nft-label">Description (optional)</Form.Label>
                                    <br/>
                                    <Form.Control as="textarea" rows={3} placeholder="example- An art gallery is a place where one can see and buy artworks by emerging"/>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label className="nft-label">Item price in ETH</Form.Label>
                                    <br/>
                                    <Form.Control type="text" placeholder="example- An art gallery is a place where one can see and buy artworks by emerging"/>
                                </Form.Group>
                                <Row className="form-group">
                                    <Col lg="6">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="nft-label">Royalties</Form.Label>
                                            <br/>
                                            <Form.Control type="text" placeholder="example- royalty"/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="nft-label">Number of copies</Form.Label>
                                            <br/>
                                            <Form.Control type="text" placeholder="example- number of copies"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="nft-submit-layout" >
                                    <Button variant="light" className="nft-submit-button" type="submit">
                                        <span className="nft-submit-text">UPLOAD ITEM</span>
                                    </Button>
                                </div>
                                
                            </Form>
                        </Container>
                    </div>
                </div>
            </>
        )
    }
}
export default NFT;