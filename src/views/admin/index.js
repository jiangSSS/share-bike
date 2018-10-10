import React,{Component} from "react";
import NavLeft from "../components/navleft/navLeft";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import {Row,Col} from "antd";
import "../admin/admin.css"
export default class Admin extends Component{
	render(){
		return(
			<div className="admin clearfix">
				<Row>
					<Col span={3} className="fll">
						<NavLeft/>            
					</Col>
					<Col span={21} className="flr">
						<Header/>
						<div className="content-warp">						    
							    {this.props.children}						   
                        </div>
						<Footer/>
    				</Col>				
				</Row>				
			</div>
		);
	}
}