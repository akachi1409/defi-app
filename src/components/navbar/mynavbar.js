import React, { useState } from "react";
import { Container, Navbar, Nav, Button, Modal, ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./mynavbar.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";

import Metamask from "../../assets/img/wallet/metamask.png"
import WalletConnect from "../../assets/img/wallet/walletconnect-logo.png"
function Mynavbar() {
  const [route, setRoute] = useState(0);
  const location = useLocation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const blockchain = useSelector((state) => state.blockchain);
  React.useEffect(() => {
    console.log("Location changed", location.pathname);
    switch (location.pathname) {
      case "/author":
        setRoute(1);
        break;
      case "/generator":
        setRoute(2);
        break;
      case "/item":
        setRoute(3);
        break;
    }
  }, [location]);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" activeKey={route}>
              <Nav.Link href="/author" eventKey="1">
                Author
              </Nav.Link>
              <Nav.Link href="/generator" eventKey="2">
                NFT Generator
              </Nav.Link>
              <Nav.Link href="/item" eventKey="3">
                NFT Item
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            <Nav>
            {
              blockchain.account === "" || blockchain.account === null ? 
                <Button variant="primary" onClick={()=> handleShow()}>Connect Wallet</Button>
                :
                <Button variant="success" >{blockchain.account.substring(0,8) + "..."}</Button>
            }
              {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
          <Modal show={show} onHide={handleClose} size="sm">
            <Modal.Header closeButton>
              <Modal.Title>Connect Wallet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ListGroup>
                <ListGroup.Item className="connect-item"><a href = "/chain"><img src={Metamask} className="wallet-icon"/> <span className="wallet-title">MetaMask</span></a></ListGroup.Item>
                <ListGroup.Item className="connect-item"><img src={WalletConnect} className="wallet-icon"/> <span className="wallet-title">WalletConnect</span></ListGroup.Item>
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Modal>
        </Container>
      </Navbar>
    </>
  );
}

export default Mynavbar;
