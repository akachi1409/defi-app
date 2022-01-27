import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./author.css";

import AuthorTile from "./tile/authorTile.js";

import Auth_Img1 from "../../assets/img/author/author-image-1.jpg";
import Auth_Img2 from "../../assets/img/author/author-image-2.jpg";
import Auth_Img3 from "../../assets/img/author/author-image-3.jpg";
import Auth_Img4 from "../../assets/img/author/author-image-4.jpg";
import Auth_Img5 from "../../assets/img/author/author-image-5.jpg";
import Auth_Img6 from "../../assets/img/author/author-image-6.jpg";
import Auth_Img7 from "../../assets/img/author/author-image-7.jpg";
import Auth_Img8 from "../../assets/img/author/author-image-8.jpg";
import Auth_Img9 from "../../assets/img/author/author-image-9.jpg";
import Auth_Img10 from "../../assets/img/author/author-image-10.jpg";
import Auth_Img11 from "../../assets/img/author/author-image-11.jpg";
import Auth_Img12 from "../../assets/img/author/author-image-12.jpg";

import Fade from "react-reveal/Fade";
class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [
        {
          img: Auth_Img1,
          name: "Paolo Bendandi",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
        {
          img: Auth_Img2,
          name: "Filipp Romanovski",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
        {
          img: Auth_Img3,
          name: "Jade Scarlato",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
        {
          img: Auth_Img4,
          name: "Maxim Shklyaev",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
      ],
      data2: [
        {
          img: Auth_Img5,
          name: "Maxim Shklyaev",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
        {
          img: Auth_Img6,
          name: "Filipp Romanovski",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
        {
          img: Auth_Img7,
          name: "Maxim Shklyaev",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
        {
          img: Auth_Img8,
          name: "Maxim Shklyaev",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
      ],
      data3: [
        {
          img: Auth_Img9,
          name: "Maxim Shklyaev",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
        {
          img: Auth_Img10,
          name: "Filipp Romanovski",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
        {
          img: Auth_Img11,
          name: "Maxim Shklyaev",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
        {
          img: Auth_Img12,
          name: "Maxim Shklyaev",
          position: "@maxim07",
          p: "a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a blockchain.",
        },
      ],
    };
  }
  render() {
    return (
      <div className="author-container">
        <Container>
          <Fade bottom>
            <Row>
              {this.state.data1.map((item, index) => (
                <Col sm="12" md="12" lg="3" key={index}>
                  <AuthorTile
                    img={item.img}
                    name={item.name}
                    position={item.position}
                    p={item.p}
                  />
                </Col>
              ))}
            </Row>
          </Fade>
          <Fade bottom>
            <Row>
              {this.state.data2.map((item, index) => (
                <Col sm="12" md="12" lg="3" key={index}>
                  <AuthorTile
                    img={item.img}
                    name={item.name}
                    position={item.position}
                    p={item.p}
                  />
                </Col>
              ))}
            </Row>
          </Fade>
          <Fade bottom>
            <Row>
              {this.state.data3.map((item, index) => (
                <Col sm="12" md="12" lg="3" key={index}>
                  <AuthorTile
                    img={item.img}
                    name={item.name}
                    position={item.position}
                    p={item.p}
                  />
                </Col>
              ))}
            </Row>
          </Fade>
        </Container>
      </div>
    );
  }
}
export default Author;
