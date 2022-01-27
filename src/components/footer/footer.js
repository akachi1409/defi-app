import React from "react";
import { Container } from "react-bootstrap";

//import CSS
import './footer.css';

//import social icons
import { BsTwitter,
        BsDiscord,
        BsInstagram } from 'react-icons/bs';
class Footer extends React.Component {
    render() {
        return (
            <div className='footer-control'>
                <Container className='footer'>
                    <p>&copy;2021 &nbsp; SPOOKYBOYS COUNTRY CLUB</p>
                    <div>
                        <BsInstagram size={32} />
                        <BsTwitter size={32} />
                        <BsDiscord size={32} />        
                    </div>
                </Container>
            </div>
        );
    }
}

export default Footer;