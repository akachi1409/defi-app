import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";


import { fetchData } from "../../redux/data/dataActions";
import NftItem from "../basic/nftItem/nftItem";
import "./nftBoard.css";

function NftBoard() {
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

  return (
    <div className="author-container">
      <Container>
        <Fade bottom>
            {
                data.tokenData.length!== 0&&
                data.tokenData.map((item, index) =>(
                    <Row key = {index}>
                        <NftItem
                        img = {"https://ipfs.io/ipfs/" + item.image.split("ipfs://")[1]}
                        title = {item.name}
                        description = {item.description}/>
                    </Row>
                ))
            }
        </Fade>
      </Container>
    </div>
  );
}

export default NftBoard;
