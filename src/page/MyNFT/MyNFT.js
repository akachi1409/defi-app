import React, {useEffect, useState} from 'react';

import "./MyNFT.css";

import Mynavbar from "../../components/navbar/mynavbar"
import NftHeader from "../../components/basic/nftHeader/nftHeader"
import NftBoard from "../../components/nftBoard/nftBoard"
import Footer from "../../components/basic/Footer/footer.js"
function MyNFT(){
    return(
        <>
            <Mynavbar/>
            <NftHeader/>
            <NftBoard/>
            <Footer/>
        </>
    )
}

export default MyNFT;