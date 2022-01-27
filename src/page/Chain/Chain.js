import React, { useEffect, useState } from 'react';
import {Container, Row, Col, ListGroup, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Chain.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
function Chain (){
    let history = useHistory();

    function handleClick() {
      history.push("/author");
    }

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };

    useEffect(() => {
        getData();
    }, [blockchain.account]);
    const notify = (msg) => toast(msg); 

    useEffect(() =>{
        if (blockchain.errorMsg !=="")
            notify(blockchain.errorMsg);
    }, [blockchain.errorMsg])
    
    return(
        <>
            <Container fluid>
                <Row>
                    <Col lg="3" sm="0" className="chain-bg">
                    </Col>
                    <Col lg="9" sm="12" className="chain-right-bg">
                        <Container>
                            <ListGroup className="chain-list">
                                {
                                    blockchain.account === ""  || blockchain.smartContract === null? 
                                    <ListGroup.Item className="chain-item" onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(connect());
                                        getData();
                                    }}> <span className="chain-title">Connect Avalanche</span>
                                    </ListGroup.Item>
                                    :
                                    <ListGroup.Item className="chain-item-selected"> <span className="chain-title">Connected</span></ListGroup.Item>
                                }
                                <ListGroup.Item className="chain-item"> <span className="chain-title">Polygon</span></ListGroup.Item>
                                <ListGroup.Item className="chain-item" onClick={handleClick}> <a >Return Home</a></ListGroup.Item>
                            </ListGroup>
                        </Container>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </>
    )
}

export default Chain;