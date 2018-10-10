import React,{Component} from "react";
import {Link} from "react-router-dom";
		import "../navleft/navleft.css";
import {Menu} from "antd"; 
const MenuItem = Menu.Item;
export default class NavLeft extends Component{
	render(){
		return(
			<div className="nav-left">
				<Menu mode="vertical" theme="dark">
					<MenuItem key="/首页" >					
						<Link to="/admin/home">首页</Link>
					</MenuItem>
					<MenuItem key="/第二页">					
						<Link to="/admin/secondPage">第二页</Link>
					</MenuItem>
				</Menu>				
			</div>
		);
	}

}