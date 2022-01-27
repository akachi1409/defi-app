import React, {Component} from "react";

import Mynavbar from "../components/navbar/mynavbar"
import GeneratorHeader from "../components/basic/generatorHeader/generatorHeader";
import NFT from "../components/nft/nft"
import Footer from "../components/basic/Footer/footer.js"
class NFTGenerator extends Component {
    render() {
        return (
            <>
                <Mynavbar/>
                <GeneratorHeader/>
                <NFT/>
                <Footer/>
            </>
        )
    }
}
export default NFTGenerator;