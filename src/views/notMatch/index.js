import React, { Component } from "react";
import notMatchImg from "../notMatch/4041.jpg";
import { Link } from "react-router-dom";
import "../notMatch/notMatch.css"
export default class NotMatch extends Component {
	render() {
		return (
			<div className="zz clearfix">
				<div className="fll">
					<div className="title">
						Oh My God ！
				</div>
					<div className="desc">
						404 您要的页面被大风吹走了
				</div>
					<strong className="strong">请检查重试</strong>
					<ul className="li">
						<li>> 或者你可以去</li>
						<li><Link to="/admin/home">> 回首页</Link></li>
					</ul>
				</div>
				<div className="img-warp fll">
					<img src={notMatchImg} className="img" alt=""/>
				</div>

			</div>
		);
	}
}