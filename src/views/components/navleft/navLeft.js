import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../navleft/navleft.css";

import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import actionCreators from "../../../redux/actionCreators"

import { Menu, Icon} from "antd";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu

class NavLeft extends Component {
	clickMenuItem = ({item,key,keyPath})=>{
			const text = item.props.children.props.children
			this.props.action.changeMenuItem(text)
	}
	render() {
		return (
			<div className="nav-left">
				<Menu mode="vertical" theme="dark" onClick={this.clickMenuItem}>
					<MenuItem key="/首页" >						
						<Link to="/admin/home"><Icon type="desktop"></Icon> 首页</Link>					
					</MenuItem>
					<MenuItem key="/详情" >						
						<Link to="/admin/order"><Icon type="pie-chart"></Icon> 管理</Link>					
					</MenuItem>
					<MenuItem key="/选择" >						
						<Link to="/admin/orderdetail/:id"><Icon type="setting"></Icon> 设置</Link>					
					</MenuItem>
					<SubMenu key="1" title={<span><Icon type="mail"/><span>订单管理</span></span>}>
						<MenuItem key="/第二页">
							<Link to="/admin/secondPage"><Icon type="inbox"></Icon> 订单管理</Link>
						</MenuItem>
						<MenuItem key="/第1页">
							<Link to="/admin/secondPage"><Icon type="inbox"></Icon> 订单管理demo</Link>
						</MenuItem>
					</SubMenu>
					<SubMenu key="2" title={<span><Icon type="appstore"/><span>图例</span></span>}>
						<MenuItem key="/bar">
							<Link to="/admin/echarts/bar_demo"><Icon type="inbox"></Icon> 条形图</Link>
						</MenuItem>
						<MenuItem key="/pie">
							<Link to="/admin/echarts/pie_demo"><Icon type="inbox"></Icon> 饼图</Link>
						</MenuItem>
					</SubMenu>
				</Menu>
			</div>
		);
	}

}
export default connect(
	null,
	(dispath)=>({
		action:bindActionCreators(actionCreators,dispath)
	})
)(NavLeft)