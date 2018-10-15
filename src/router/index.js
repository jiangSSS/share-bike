import React,{Component} from "react";
import  {HashRouter,Route,Switch} from "react-router-dom";

import Admin from "../views/admin/index";
import Home from "../views/Home/index";
import SecondPage from "../views/secondPage/index";
import NotMatch from "../views/notMatch/index";

import order from "../views/order/index";
import orderDetail from "../views/orderDetail/index";

import BarDemo from "../views/echarts/bar";
import PieDemo from "../views/echarts/pie";
export default class Router extends  Component{
	render(){
		return(
			<HashRouter>
				<div>
					<Switch>
						<Route path="/admin/orderdetail/:id" component={orderDetail}></Route>
						<Route path="/admin" render={()=>
							<Admin>
                                <Switch>
                                    <Route path="/admin/home" component={Home}></Route>							
								    <Route path="/admin/secondPage" component={SecondPage}></Route>		
								    <Route path="/admin/order" component={order}></Route>		
									{/* <Route path="/admin/orderdetail" component={orderDetail}></Route>		 */}
								    <Route path="/admin/echarts/bar_demo" component={BarDemo}></Route>		
								    <Route path="/admin/echarts/pie_demo" component={PieDemo}></Route>		
                                    <Route component={NotMatch}></Route>	
                                </Switch>  										
							</Admin>
						}></Route>
						<Route component={NotMatch}></Route>
					</Switch>					
				</div>
			</HashRouter>            
		);
	}
}