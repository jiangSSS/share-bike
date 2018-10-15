import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class userInfo extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="title-warp fll">共享单车后台操作系统</h1>
                <div className="detail-info clearfix">
                    <div className="flr">
                        <Link to="/admin/home" className="logout">退出</Link>
                    </div>
                    <div className="user-detail flr">
                        欢迎 <span className="username">姜盛</span>
                    </div>
                </div>
            </div>
        )
    }
}