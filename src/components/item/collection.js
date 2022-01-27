import React, { Component } from 'react';

import './collection.css';
import './seller.css';

class Collection extends Component {
    render() {
        return (
            <>
                <section className="seller-container">
                    <div className="seller-layout element-row">
                        <section className="seller-title-layout">
                            <h2 className="seller-title">OUR TOP COLLECTIONS</h2>
                            <h2 className="seller-title-text">a non-fungible toket (NFT) is a unit of data stored on a digital ledger, called a
                                blockchain, that certifies a digital asset to be unique</h2>
                        </section>
                        <section className="seller-box-layout">
                            <div className="element-row">
                            </div>
                        </section>
                    </div>
                </section>
            </>
        )
    }
}
export default Collection;