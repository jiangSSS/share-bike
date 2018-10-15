import React,{Component} from "react";
import NavLeft from "../components/navleft/navLeft";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import {Row,Col} from "antd";
import "../admin/admin.css"
export default class Admin extends Component{
	componentDidMount(){
		console.log(this.props)
	}
	render(){
		return(
			<div className="admin clearfix">
				<Row>
					<Col span={3} className="nav-left-wrap">
						<NavLeft/>            
					</Col>
					<Col span={21} style={{height:"100vh",overflow:"auto"}}>
						<Header/>
						<div className="content-warp">	
							<div className="content">
								{this.props.children}	
							</div>					    						   					   
                        </div>
						<Footer/>
    				</Col>				
				</Row>				
			</div>
		);
	}
}