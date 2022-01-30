import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import axios from "axios";

import { fetchData } from "../../redux/data/dataActions";
import NftItem from "../basic/nftItem/nftItem";
import "./nftBoard.css";

function NftBoard() {
  const dispatch = useDispatch();

  const [tokens, setTokens] = useState([]);
  const [flag, setFlag] = useState(false);
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

  useEffect(() => {
    console.log("--------------------");
    let temp = []
    for ( var index = 0 ; index < data.tokenData.length; index ++){
        axios.get(data.tokenData[index])
            .then((res) => {
                // console.log(res.data)
                temp.push(res.data);
            })
    }
    setTokens(temp);
    setFlag(!flag);
  }, [!tokens])

  console.log("data:", tokens);
  return (
    <div className="author-container">
      <Container>
        <Fade bottom>
            {
                tokens.length!== 0&&
                tokens.map((item, index) =>(
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
