import React,{Component} from "react";
import ReactEcharts from "echarts-for-react";  //引入echarts库
import echarts from "echarts/lib/echarts"     //引入echarts核心包
import "echarts/lib/chart/pie";               //引入饼图组件
import "echarts/lib/component/legend";		  //引入legend组件
import echartsTheme from "../themeLight"
import {Card} from "antd"
export default class PieDemo extends Component{
	componentWillMount(){
		echarts.registerTheme("jiang",echartsTheme)
	}
	pie1 = () =>{
		return {
			title : {
				text: '用户骑行订单',
				subtext:"表一",
				x:'center'
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				right: 'right',
				data: ['周一','周二','周三','周四','周五',"周六","周日"]
			},
			series : [
				{
					name: '骑行订单',
					type: 'pie',
					radius : '65%',
					center: ['50%', '60%'],
					data:[
						{value:3350, name:'周一'},
						{value:5200, name:'周二'},
						{value:6340, name:'周三'},
						{value:8750, name:'周四'},
						{value:10480, name:'周五'},
						{value:13480, name:'周六'},
						{value:7480, name:'周日'}
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}
	}
	pie2(){
		return{
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'right',
				data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			},
			series: [
				{
					name:'访问来源',
					type:'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data:[
						{value:335, name:'直接访问'},
						{value:310, name:'邮件营销'},
						{value:234, name:'联盟广告'},
						{value:135, name:'视频广告'},
						{value:1548, name:'搜索引擎'}
					]
				}
			]
		}
	}
	render(){
		return(
			<div className="content">
				<Card title="饼状图1">
					<ReactEcharts option={this.pie1()} theme="jiang"></ReactEcharts>
				</Card>
				<Card title="饼状图2">
					<ReactEcharts option={this.pie2()}></ReactEcharts>
				</Card>
			</div>
				

		);
	}
}