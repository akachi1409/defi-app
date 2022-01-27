import React, {Component} from "react";

import "./authorTile.css";


import FollowBtn from "../../basic/button/followBtn.js"
class AuthorTile extends Component{
    render(){
        return(
            <div className="authorTile-container">
                <div className="authorTile-border">
                    <div className="authorTile-wrap">
                        <div className="authorTile-article-layout">
                            <div className="authorTile-article-image">
                                <figure>
                                    <img src={this.props.img}></img>
                                </figure>
                            </div>
                            <div className="authorTile-article-text">
                                <h3 className="authorTile-article-name">{this.props.name}</h3>
                                <h4 className="authorTile-article-position">{this.props.position}</h4>
                                <p className="authorTile-article-p">{this.props.p}</p>
                            </div>
                        </div>
                        <FollowBtn />
                    </div>
                </div>
            </div>
        )
    }
}
export default AuthorTile;