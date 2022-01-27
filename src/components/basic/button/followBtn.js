import React, {Component} from "react";

import "./followBtn.css";

class FollowBtn extends Component{
    render(){
        return(
            <div className="followBtn-layout">
                <div className="followBtn-container">
                    <a className = "followBtn-link">follow </a>
                </div>
            </div>
            
        )
    }
}
export default FollowBtn;