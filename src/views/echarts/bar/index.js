import React,{Component} from "react";
import ReactEcharts from "echarts-for-react";  //引入echarts库
// import echarts from "echarts/lib/echarts"     //引入echarts核心包
import "echarts/lib/chart/pie";               //引入饼图组件
import "echarts/lib/component/legend";		  //引入legend组件
import {Card} from "antd"
export default class BarDemor extends Component{
	bar1 = ()=>{
		return{
			title : {
				text: '用户骑行订单',
				x:'center'
			},
			color: ['#3398DB'],
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
					axisTick: {
						alignWithLabel: true
					}
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],			
			series : [
				{
					name:'骑行订单',
					type:'bar',
					barWidth: '30%',
					data:[1000, 5200, 3760, 6664, 8690, 3309, 4202]
				}
			],
		}
	}
	bar2 = ()=>{
		return{
			color: ['#e75225'],
			xAxis: {
				type: 'category',
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
			},
			yAxis: {
				type: 'value'
			},
			series: [{
				data: [12345, 23456, 67890, 34567, 11111, 44444, 1300],
				type: 'bar',
				barWidth:'40%'
			}]
		}
	}
	render(){
		return(
			<div className="">
				<Card title="条形图1">
					<ReactEcharts option={this.bar1()}></ReactEcharts>
				</Card>
				<Card title="条形图2">
					<ReactEcharts option={this.bar2()}></ReactEcharts>
				</Card>
			</div>
		);
	}
}