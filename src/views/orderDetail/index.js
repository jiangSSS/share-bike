import React, { Component } from "react";
import "./orderdemo.css"
import { Link } from "react-router-dom"
import { Card } from "antd"

import axios from "axios"
class orderDetail extends Component {
	componentDidMount() {
		this.initMap()
	}
	// getData = () => {
	// 	const { id } = this.props.match.params
	// 	axios.get("/order/detail", { id }).then(res => {
	// 		console.log(111111)
	// 		if (res.code == 0) {
	// 			this.initMap(res.result)
	// 		}
	// 	})
	// }
	// 1.初始化地图
	initMap = (result) => {
		const BMap = window.BMap
		this.map = new BMap.Map("bmap-warp")
		const point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
		// this.map.centerAndZoom(point, 15);			// 初始化地图，设置中心点坐标和地图级别
		this.map.enableScrollWheelZoom(true);			//开启鼠标滚轮缩放
		this.addControl()  								//添加控件
		// this.drawPolyline(result.position_list)		//绘制折线图
		this.drawPolyline()								//绘制折线图
		this.drawserviceArea()      					//绘制服务区
	}
	// 2.添加控件
	addControl = () => {
		const BMap = window.BMap
		const map = this.map
		map.addControl(new BMap.NavigationControl({    //平移缩放控件
			anchor: window.BMAP_ANCHOR_TOP_RIGHT
		}));
		map.addControl(new BMap.ScaleControl({		   //比例尺控件
			anchor: window.BMAP_ANCHOR_BOTTOM_RIGHT
		}));
		map.addControl(new BMap.MapTypeControl({       //地图类型控件
			anchor: window.BMAP_ANCHOR_TOP_LEFT
		}));
	}
	// 3.绘制折线路径
	drawPolyline = (position_list) => {
		const BMap = window.BMap
		const map = this.map
		// let startPoint = position_list[0]  								            //获取开始的坐标点
		let startPoint = new BMap.Point(116.390244, 39.92556);
		//获取开始的坐标点
		// let endPoint = position_list[position_list.length - 1]  		                //获取结束的坐标点
		let endPoint = new BMap.Point(116.450244, 39.98156);  		                    //获取结束的坐标点
		// let startMapPoint = new BMap.Point(startPoint.lon, startPoint.lat)           //生成坐标起点
		// let endMapPoint = new BMap.Point(endPoint.lon, endPoint.lat) 	            //生成坐标终点
		let startIcon = new BMap.Icon("/imgs/start_point.png", new BMap.Size(36, 41), { //新建一个icon      
			imageSize: new BMap.Size(36, 41)
		});
		let endIcon = new BMap.Icon("/imgs/end_point.png", new BMap.Size(36, 41), {
			imageSize: new BMap.Size(36, 41)
		});
		let startMarker = new BMap.Marker(startPoint, { icon: startIcon })               //创建起点标注(并使用icon)
		let endMarker = new BMap.Marker(endPoint, { icon: endIcon })					 //创建终点标注(并使用icon)
		map.addOverlay(startMarker)										   				 //将起点标注添加到地图
		map.addOverlay(endMarker)
		map.centerAndZoom(startPoint, 12);
		//绘制折线
		let polyline = new BMap.Polyline([
			new BMap.Point(116.390244, 39.92556),
			new BMap.Point(116.450244, 39.98156)
		],
			{ strokeColor: "blue", strokeWeight: 7, strokeOpacity: 0.7 }
		);
		map.addOverlay(polyline);								   				 //将终点标注添加到地图
	}
	// 4.绘制服务区
	drawserviceArea = () => {
		const BMap = window.BMap
		const map = this.map
		let polygon = new BMap.Polygon(
			[
				new BMap.Point(116.390244, 39.92556),
				new BMap.Point(116.402243, 39.90363),
				new BMap.Point(116.450244, 39.98156),
				new BMap.Point(116.3920226, 39.95798),				
			],			
			{
				setStrokeColor: "#ff0000",
				setStrokeWeight: 4,
				fillColor: "#ff6700",
				fillOpacity: 0.5
			}
		)
		map.addOverlay(polygon)
	}
	render() {
		return (
			<div className="detail-demo">
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
				<Card>
					<div className="bmap" id="bmap-warp"></div>
				</Card>
			</div>
		);
	}
}
export default orderDetail